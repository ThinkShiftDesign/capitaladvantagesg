{\rtf1\ansi\ansicpg1252\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 // Fade-in on scroll\
const sections = document.querySelectorAll("section");\
const observer = new IntersectionObserver(entries => \{\
  entries.forEach(entry => \{\
    if (entry.isIntersecting) entry.target.classList.add("visible");\
  \});\
\}, \{ threshold: 0.1 \});\
sections.forEach(sec => observer.observe(sec));\
\
// Back to top\
const backToTop = document.getElementById("backToTop");\
window.addEventListener("scroll", () => \{\
  backToTop.style.display = window.scrollY > 300 ? "block" : "none";\
\});\
backToTop.addEventListener("click", () => window.scrollTo(\{ top:0, behavior:"smooth" \}));\
\
// Dark mode toggle\
const toggle = document.getElementById("darkToggle");\
toggle.addEventListener("click", () => \{\
  document.body.classList.toggle("dark");\
  toggle.textContent = document.body.classList.contains("dark") ? "\uc0\u9728 \u65039  Light Mode" : "\u55356 \u57113  Dark Mode";\
\});\
}