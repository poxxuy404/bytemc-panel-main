import { useState, useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Menu, X, Sun, Moon, Sparkles } from "lucide-react";
import { GlassButton } from "@/components/ui/glass-button";
import { useTheme } from "@/hooks/use-theme";
import { cn } from "@/lib/utils";

const navLinks = [
  { to: "/", labelKey: "nav.home" },
  { to: "/about", labelKey: "nav.about" },
  { to: "/prices", labelKey: "nav.prices" },
  { to: "/admins", labelKey: "nav.admins" },
  { to: "/faq", labelKey: "nav.faq" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentLang, setCurrentLang] = useState<"uz" | "ru">("uz");
  const location = useLocation();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    // keep currentLang in sync with i18next initial language if available
    const lang = i18n.language?.startsWith("ru") ? "ru" : "uz";
    setCurrentLang(lang);
  }, [i18n.language]);

  const changeLang = (lang: "uz" | "ru") => {
    setCurrentLang(lang);
    i18n.changeLanguage(lang);
  };

  const handlePlay = () => {
    // default behaviour: navigate to /play — adjust if you want modal/external link
    navigate("/play");
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "glass py-3" : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <NavLink to="/" className="font-display text-2xl font-bold text-gradient">
          {t("brand")}
        </NavLink>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                cn(
                  "px-4 py-2 font-display font-semibold text-sm transition-all duration-300 rounded-lg",
                  isActive
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/30"
                )
              }
            >
              {t(link.labelKey)}
            </NavLink>
          ))}
        </div>

        {/* Right controls (Desktop) */}
        <div className="hidden md:flex items-center gap-4">
          {/* Theme toggle */}
          <GlassButton
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Light mode" : "Dark mode"}
            title={theme === "dark" ? "Light mode" : "Dark mode"}
          >
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </GlassButton>

          {/* Polished language pills + animated Play */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 bg-white/5 backdrop-blur rounded-full p-1 shadow-sm">
              <GlassButton
                variant={currentLang === "uz" ? "primary" : "ghost"}
                size="icon"
                onClick={() => changeLang("uz")}
                aria-pressed={currentLang === "uz"}
                aria-label="O'zbekcha"
                className="relative overflow-hidden transition-transform transform hover:scale-105 focus:scale-105"
              >
                <span className="w-6 text-xs font-semibold">UZ</span>
                {currentLang === "uz" && (
                  <span className="absolute -inset-px rounded-full ring-1 ring-primary/40 pointer-events-none" />
                )}
              </GlassButton>

              <GlassButton
                variant={currentLang === "ru" ? "primary" : "ghost"}
                size="icon"
                onClick={() => changeLang("ru")}
                aria-pressed={currentLang === "ru"}
                aria-label="Русский"
                className="relative overflow-hidden transition-transform transform hover:scale-105 focus:scale-105"
              >
                <span className="w-6 text-xs font-semibold">RU</span>
                {currentLang === "ru" && (
                  <span className="absolute -inset-px rounded-full ring-1 ring-primary/40 pointer-events-none" />
                )}
              </GlassButton>
            </div>

            <div className="relative">
              <span
                aria-hidden
                className="absolute -inset-1 rounded-xl filter blur-md opacity-60"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(99,102,241,0.18), rgba(236,72,153,0.16), rgba(250,204,21,0.12))",
                  transform: "translateZ(0)",
                  animation: "nav-play-glow 6s linear infinite",
                  zIndex: 0,
                }}
              />

              <GlassButton
                variant="primary"
                onClick={handlePlay}
                className="relative z-10 px-5 py-3 flex items-center gap-3 text-lg font-semibold rounded-xl shadow-lg transition-transform transform hover:scale-105 active:scale-95"
                aria-label={t("playNow")}
              >
                <span className="relative inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/10">
                  <Sparkles className="w-4 h-4 text-white/90 animate-[nav-sparkle_1.6s_ease-in-out_infinite]" />
                </span>

                <span>{t("playNow")}</span>

                <span className="ml-2 inline-flex items-center justify-center px-2 py-0.5 text-xs font-medium bg-white/10 rounded-full">
                  LIVE
                </span>
              </GlassButton>
            </div>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          <GlassButton
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Light mode" : "Dark mode"}
          >
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </GlassButton>

          {/* compact language buttons on mobile */}
          <div className="flex items-center gap-1">
            <GlassButton
              variant={currentLang === "uz" ? "primary" : "ghost"}
              size="icon"
              onClick={() => changeLang("uz")}
              aria-pressed={currentLang === "uz"}
              aria-label="UZ"
            >
              UZ
            </GlassButton>
            <GlassButton
              variant={currentLang === "ru" ? "primary" : "ghost"}
              size="icon"
              onClick={() => changeLang("ru")}
              aria-pressed={currentLang === "ru"}
              aria-label="RU"
            >
              RU
            </GlassButton>
          </div>

          <GlassButton
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </GlassButton>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-300",
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="glass mx-4 mt-3 rounded-lg p-4 flex flex-col gap-2">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                cn(
                  "px-4 py-3 font-display font-semibold text-sm transition-all duration-300 rounded-lg",
                  isActive
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/30"
                )
              }
            >
              {t(link.labelKey)}
            </NavLink>
          ))}

          {/* mobile polished row */}
          <div className="flex items-center justify-end gap-2 mt-3">
            <GlassButton variant="primary" onClick={handlePlay}>
              {t("playNow")}
            </GlassButton>
          </div>
        </div>
      </div>

      {/* Inline keyframes for subtle animations (works without modifying Tailwind config) */}
      <style>{`
        @keyframes nav-play-glow {
          0% { transform: rotate(0deg) scale(1); opacity: 0.58; }
          50% { transform: rotate(3deg) scale(1.02); opacity: 0.72; }
          100% { transform: rotate(0deg) scale(1); opacity: 0.58; }
        }
        @keyframes nav-sparkle {
          0% { transform: translateY(0) rotate(0deg) scale(1); opacity: 0.9; filter: drop-shadow(0 6px 18px rgba(99,102,241,0.12)); }
          50% { transform: translateY(-2px) rotate(12deg) scale(1.05); opacity: 1; filter: drop-shadow(0 10px 26px rgba(236,72,153,0.12)); }
          100% { transform: translateY(0) rotate(0deg) scale(1); opacity: 0.9; filter: drop-shadow(0 6px 18px rgba(99,102,241,0.12)); }
        }
      `}</style>
    </nav>
  );
}

