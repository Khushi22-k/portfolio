import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, ShieldAlert, Inbox, Trash2 } from 'lucide-react';
import { personalInfo } from '../data';
import { Message } from '../types';

export default function Contact() {
  // Local list of submitted messages to act as a reactive sandbox DB
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "seed-msg-1",
      name: "Acme Analytics Corp",
      email: "recruitment@acme.co",
      subject: "Senior Analyst Role Opportunity",
      content: "Hi Khushi! We reviewed your Mutual Fund Performance analysis and were extremely impressed with your DAX architecture and rolling CAGR automation. Are you available for an exploratory conversation next Tuesday?",
      timestamp: new Date(Date.now() - 3600000 * 4).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);

  const [form, setForm] = useState({ name: '', email: '', subject: '', content: '' });
  const [submitted, setSubmitted] = useState(false);
  const [showInbox, setShowInbox] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.content) return;

    const newMessage: Message = {
      id: Math.random().toString(36).substr(2, 9),
      name: form.name,
      email: form.email,
      subject: form.subject || 'Portfolio Inquiry',
      content: form.content,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages([newMessage, ...messages]);
    setSubmitted(true);
    setForm({ name: '', email: '', subject: '', content: '' });

    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  const handleDeleteMessage = (id: string) => {
    setMessages(messages.filter((msg) => msg.id !== id));
  };

  return (
    <section id="contact" className="py-20 bg-[#F9F9F9] text-left relative border-b border-black">
      
      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 border-b border-black pb-8">
          <span className="font-mono text-[10px] font-bold text-neutral-500 tracking-widest uppercase mb-3 block">
            GET IN TOUCH
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-black text-black tracking-tight leading-none">
            Contact Me
          </h2>
          <p className="font-sans text-xs sm:text-sm text-neutral-600 mt-3 max-w-2xl leading-relaxed">
            Let's discuss data pipelines, automation opportunities, business intelligence dashboards, or internship openings.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Contact Coordinates Panel */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white border border-black p-6 rounded-none shadow-[4px_4px_0px_rgba(0,0,0,1)] space-y-6">
              <h3 className="font-serif text-xl font-bold italic text-black border-b border-black pb-3">
                Corporate Address Card
              </h3>

              <div className="space-y-5">
                <div className="flex items-start space-x-4">
                  <div className="p-2.5 border border-black rounded-none bg-neutral-50">
                    <MapPin className="w-5 h-5 text-black" />
                  </div>
                  <div>
                    <h4 className="font-mono text-[10px] font-bold text-neutral-500 uppercase tracking-widest">Location</h4>
                    <p className="font-sans text-sm text-black mt-1 font-bold uppercase">{personalInfo.location}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-2.5 border border-black rounded-none bg-neutral-50">
                    <Mail className="w-5 h-5 text-black" />
                  </div>
                  <div>
                    <h4 className="font-mono text-[10px] font-bold text-neutral-500 uppercase tracking-widest">Direct Email</h4>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="font-mono text-xs font-bold text-black border-b border-black pb-0.5 hover:text-neutral-600 hover:border-neutral-400 mt-1 inline-block uppercase tracking-wider"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-2.5 border border-black rounded-none bg-neutral-50">
                    <Phone className="w-5 h-5 text-black" />
                  </div>
                  <div>
                    <h4 className="font-mono text-[10px] font-bold text-neutral-500 uppercase tracking-widest">Contact Number</h4>
                    <p className="font-mono text-xs text-black mt-1 font-bold">{personalInfo.phone}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Admin Sandbox Inbox Button */}
            <div className="bg-white border border-black p-4 rounded-none shadow-[3px_3px_0px_rgba(0,0,0,1)] flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Inbox className="w-4 h-4 text-black" />
                <span className="font-mono text-[10px] text-black font-bold uppercase tracking-wider">
                  Inbox Sandbox Mode ({messages.length})
                </span>
              </div>
              <button
                onClick={() => setShowInbox(!showInbox)}
                className="font-mono text-[10px] font-bold text-white bg-black hover:bg-neutral-800 px-3.5 py-1.5 rounded-none border border-black transition-all uppercase tracking-widest cursor-pointer shadow-[2px_2px_0px_rgba(0,0,0,1)] active:translate-y-[1px]"
              >
                {showInbox ? 'Hide Inbox' : 'Open Inbox'}
              </button>
            </div>
          </div>

          {/* Form Panel Column */}
          <div className="lg:col-span-7">
            
            {showInbox ? (
              /* Administrative Message Log (Interactive playground) */
              <div className="bg-white border border-black rounded-none p-6 space-y-4 shadow-[4px_4px_0px_rgba(0,0,0,1)] animate-in fade-in duration-200">
                <div className="flex justify-between items-center border-b border-black pb-3">
                  <div className="flex items-center space-x-2">
                    <Inbox className="w-5 h-5 text-black" />
                    <h3 className="font-serif text-lg font-bold text-black italic">Submitted Messages (Sandbox Storage)</h3>
                  </div>
                  <span className="bg-neutral-100 border border-black font-mono text-[9px] font-bold px-2 py-0.5 rounded-none text-black uppercase tracking-wider">
                    LOCAL SESSION
                  </span>
                </div>

                {messages.length === 0 ? (
                  <div className="py-8 text-center text-neutral-500 font-mono text-xs italic uppercase tracking-wider">
                    Inbox is currently empty. Submit the contact form to see messages appear here instantly!
                  </div>
                ) : (
                  <div className="space-y-4 max-h-[380px] overflow-y-auto pr-1">
                    {messages.map((msg) => (
                      <div key={msg.id} className="border border-black p-4 rounded-none bg-neutral-50 space-y-2 relative shadow-[2px_2px_0px_rgba(0,0,0,1)]">
                        <button
                          onClick={() => handleDeleteMessage(msg.id)}
                          className="absolute top-4 right-4 p-1.5 border border-transparent text-neutral-500 hover:text-black hover:border-black rounded-none hover:bg-white transition-all cursor-pointer"
                          title="Delete message"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                        <div className="flex justify-between items-start pr-6">
                          <div>
                            <span className="font-sans text-sm font-bold text-black uppercase tracking-tight">{msg.name}</span>
                            <span className="font-mono text-[10px] text-neutral-500 font-bold block">{msg.email}</span>
                          </div>
                          <span className="font-mono text-[9px] text-neutral-500 bg-white border border-black px-1.5 py-0.5 rounded-none">
                            {msg.timestamp}
                          </span>
                        </div>
                        <div className="font-mono text-[10px] font-bold text-black uppercase tracking-wide">SUB: {msg.subject}</div>
                        <p className="font-sans text-xs sm:text-sm text-neutral-600 leading-relaxed pt-1 whitespace-pre-wrap text-justify">
                          {msg.content}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
                
                <p className="font-mono text-[9px] text-neutral-500 text-center uppercase tracking-wider italic">
                  *Messages submitted through the portfolio are held securely inside your client-side session.
                </p>
              </div>
            ) : (
              /* Contact Form */
              <form onSubmit={handleSubmit} className="bg-white border border-black rounded-none p-6 space-y-4 shadow-[4px_4px_0px_rgba(0,0,0,1)]">
                <h3 className="font-serif text-xl font-bold italic text-black border-b border-black pb-3 mb-2">
                  Dispatch a Message
                </h3>

                {submitted && (
                  <div className="bg-neutral-50 border border-black text-black px-4 py-3 rounded-none flex items-start space-x-3 text-xs sm:text-sm animate-in slide-in-from-top-4 duration-200">
                    <CheckCircle className="w-5 h-5 shrink-0 mt-0.5 text-black" />
                    <div>
                      <span className="font-bold uppercase tracking-wider block">Transmission Succeeded!</span>
                      <p className="text-xs text-neutral-600 mt-1">
                        Your message was registered in the Local Inbox. Toggle 'Open Inbox' to inspect the record!
                      </p>
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="form-name" className="font-mono text-[10px] font-bold text-neutral-500 uppercase tracking-widest">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="form-name"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="e.g. Hiring Manager"
                      className="w-full bg-neutral-50 border border-black rounded-none px-3 py-2.5 font-sans text-sm outline-none transition-colors focus:bg-white focus:ring-1 focus:ring-black"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="form-email" className="font-mono text-[10px] font-bold text-neutral-500 uppercase tracking-widest">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="form-email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="e.g. manager@corporation.com"
                      className="w-full bg-neutral-50 border border-black rounded-none px-3 py-2.5 font-sans text-sm outline-none transition-colors focus:bg-white focus:ring-1 focus:ring-black"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="form-subject" className="font-mono text-[10px] font-bold text-neutral-500 uppercase tracking-widest">
                    Subject Heading
                  </label>
                  <input
                    type="text"
                    id="form-subject"
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    placeholder="e.g. Data Analyst Role Inquiry"
                    className="w-full bg-neutral-50 border border-black rounded-none px-3 py-2.5 font-sans text-sm outline-none transition-colors focus:bg-white focus:ring-1 focus:ring-black"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="form-content" className="font-mono text-[10px] font-bold text-neutral-500 uppercase tracking-widest">
                    Message Content *
                  </label>
                  <textarea
                    id="form-content"
                    required
                    rows={4}
                    value={form.content}
                    onChange={(e) => setForm({ ...form, content: e.target.value })}
                    placeholder="Describe your dataset, pipeline challenge, or general vacancy details..."
                    className="w-full bg-neutral-50 border border-black rounded-none px-3 py-2.5 font-sans text-sm outline-none transition-colors resize-none focus:bg-white focus:ring-1 focus:ring-black"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex justify-center items-center space-x-2 bg-black hover:bg-neutral-800 text-white px-6 py-3.5 font-mono text-xs font-bold uppercase tracking-widest rounded-none border border-black shadow-[3px_3px_0px_rgba(0,0,0,1)] active:translate-y-[1px] transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>TRANSMIT SECURE MESSAGE</span>
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
