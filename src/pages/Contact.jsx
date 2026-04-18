import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from "lucide-react";
import PageHero from "../components/ui/PageHero";

const contactInfo = [
  {
    Icon: MapPin,
    label: "Address",
    value: "Plot No. 9/A, BEMCIEL Industrial Estate, Udyambag, Belagavi - 590008",
    sub: "Karnataka, India",
  },
  {
    Icon: Phone,
    label: "Phone",
    value: "+91 72043 39500 / +91 94484 80832",
    sub: "Mon-Sat, 9:00 AM - 6:00 PM",
  },
  {
    Icon: Mail,
    label: "Email",
    value: "prasad.engineering@rediffmail.com",
    sub: "We respond within 24 hours",
  },
  {
    Icon: Clock,
    label: "Working Hours",
    value: "Mon-Sat: 9:00 AM - 6:00 PM",
    sub: "IST (UTC+5:30)",
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Contact() {
  const [form, setForm] = useState({
    name: "", company: "", email: "", phone: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  function validate() {
    const e = {};
    if (!form.name.trim())    e.name    = "Name is required";
    if (!form.email.trim())   e.email   = "Email is required";
    if (!form.message.trim()) e.message = "Message is required";
    return e;
  }

  function handleSubmit(ev) {
    ev.preventDefault();
    const e = validate();
    if (Object.keys(e).length) { setErrors(e); return; }
    setErrors({});
    setSubmitted(true);
  }

  return (
    <>
      <PageHero
        tag="Contact"
        title="Get In Touch"
        subtitle="Have a requirement? Our team will get back to you within 24 hours with a tailored response."
      />

      {/* â”€â”€ Info tiles + Form â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section className="relative bg-surface overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-25"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.025) 1px,transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full
                        bg-brand-700/15 blur-3xl pointer-events-none -translate-x-1/2 -translate-y-1/3" />

        <div className="container-max section-padding py-20 lg:py-28 relative z-10">
          <div className="grid lg:grid-cols-2 gap-14">

            {/* LEFT â€” Info tiles */}
            <div className="space-y-4">
              <motion.div {...fadeUp(0)}>
                <h2 className="text-3xl font-display font-bold text-white mb-2">
                  Contact Information
                </h2>
                <p className="text-steel-400 text-[15px]">
                  Reach us through any of the channels below.
                </p>
              </motion.div>

              {contactInfo.map(({ Icon, label, value, sub }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                  className="flex items-start gap-4 p-5 rounded-2xl
                             bg-surface-2 border border-white/[0.07]
                             hover:border-brand-500/25 transition-colors duration-200"
                >
                  <div className="w-10 h-10 rounded-xl bg-brand-500/10 border border-brand-500/20
                                  flex items-center justify-center shrink-0">
                    <Icon size={18} className="text-brand-400" strokeWidth={1.75} />
                  </div>
                  <div>
                    <p className="text-[11px] text-steel-500 uppercase tracking-widest font-semibold mb-0.5">
                      {label}
                    </p>
                    <p className="text-[15px] font-semibold text-white">{value}</p>
                    <p className="text-[12px] text-steel-500 mt-0.5">{sub}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* RIGHT â€” Form */}
            <motion.div {...fadeUp(0.1)}>
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center gap-4
                                rounded-2xl border border-brand-500/30 bg-brand-500/5 p-12 text-center">
                  <CheckCircle2 size={48} className="text-brand-400" strokeWidth={1.5} />
                  <h3 className="font-display font-bold text-2xl text-white">
                    Message Sent!
                  </h3>
                  <p className="text-steel-400 text-[15px]">
                    Thank you for reaching out. Our team will respond within 24 hours.
                  </p>
                </div>
              ) : (
                <form
                  id="contact-form"
                  onSubmit={handleSubmit}
                  className="rounded-2xl border border-white/[0.08] bg-surface-2 p-8 space-y-5"
                >
                  <h3 className="font-display font-bold text-xl text-white mb-1">
                    Send a Message
                  </h3>
                  <p className="text-steel-400 text-[13px] pb-2">
                    Fill out the form and we'll be in touch shortly.
                  </p>

                  {/* Name + Company */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[12px] text-steel-400 mb-1.5 font-medium">
                        Full Name <span className="text-brand-400">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Your name"
                        className={`w-full px-4 py-2.5 rounded-xl bg-surface border text-white
                                    text-[14px] placeholder:text-steel-600 outline-none
                                    focus:border-brand-500 transition-colors duration-200
                                    ${errors.name ? "border-red-500/60" : "border-white/[0.08]"}`}
                      />
                      {errors.name && (
                        <p className="text-[11px] text-red-400 mt-1">{errors.name}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-[12px] text-steel-400 mb-1.5 font-medium">
                        Company
                      </label>
                      <input
                        id="contact-company"
                        type="text"
                        value={form.company}
                        onChange={(e) => setForm({ ...form, company: e.target.value })}
                        placeholder="Your company"
                        className="w-full px-4 py-2.5 rounded-xl bg-surface border border-white/[0.08]
                                   text-white text-[14px] placeholder:text-steel-600 outline-none
                                   focus:border-brand-500 transition-colors duration-200"
                      />
                    </div>
                  </div>

                  {/* Email + Phone */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[12px] text-steel-400 mb-1.5 font-medium">
                        Email <span className="text-brand-400">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="you@company.com"
                        className={`w-full px-4 py-2.5 rounded-xl bg-surface border text-white
                                    text-[14px] placeholder:text-steel-600 outline-none
                                    focus:border-brand-500 transition-colors duration-200
                                    ${errors.email ? "border-red-500/60" : "border-white/[0.08]"}`}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-red-400 mt-1">{errors.email}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-[12px] text-steel-400 mb-1.5 font-medium">
                        Phone
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full px-4 py-2.5 rounded-xl bg-surface border border-white/[0.08]
                                   text-white text-[14px] placeholder:text-steel-600 outline-none
                                   focus:border-brand-500 transition-colors duration-200"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-[12px] text-steel-400 mb-1.5 font-medium">
                      Message <span className="text-brand-400">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Describe your requirement, material, quantity, or any questions..."
                      className={`w-full px-4 py-2.5 rounded-xl bg-surface border text-white
                                  text-[14px] placeholder:text-steel-600 outline-none resize-none
                                  focus:border-brand-500 transition-colors duration-200
                                  ${errors.message ? "border-red-500/60" : "border-white/[0.08]"}`}
                    />
                    {errors.message && (
                      <p className="text-[11px] text-red-400 mt-1">{errors.message}</p>
                    )}
                  </div>

                  <button
                    id="contact-submit"
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2
                               px-6 py-3.5 rounded-xl bg-brand-600 hover:bg-brand-500
                               text-white font-semibold text-sm
                               transition-colors duration-200 shadow-lg shadow-brand-900/30 group"
                  >
                    Send Message
                    <Send size={14}
                      className="group-hover:translate-x-0.5 transition-transform duration-200" />
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

