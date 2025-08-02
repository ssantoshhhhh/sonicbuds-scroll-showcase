import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
					glow: 'hsl(var(--primary-glow))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
					glow: 'hsl(var(--accent-glow))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				}
			},
			backgroundImage: {
				'gradient-cosmic': 'var(--gradient-cosmic)',
				'gradient-electric': 'var(--gradient-electric)',
				'gradient-glow': 'var(--gradient-glow)',
				'gradient-hero': 'var(--gradient-hero)'
			},
			boxShadow: {
				'electric': 'var(--shadow-electric)',
				'glow': 'var(--shadow-glow)',
				'premium': 'var(--shadow-premium)'
			},
			transitionTimingFunction: {
				'smooth': 'cubic-bezier(0.16, 1, 0.3, 1)',
				'elastic': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
					'50%': { transform: 'translateY(-20px) rotate(2deg)' }
				},
				'emerge-from-case': {
					'0%': { transform: 'translateY(100px) scale(0.8) rotateX(45deg)', opacity: '0' },
					'50%': { transform: 'translateY(20px) scale(0.95) rotateX(20deg)', opacity: '0.7' },
					'100%': { transform: 'translateY(0px) scale(1) rotateX(0deg)', opacity: '1' }
				},
				'retract-to-case': {
					'0%': { transform: 'translateY(0px) scale(1) rotateX(0deg)', opacity: '1' },
					'50%': { transform: 'translateY(20px) scale(0.95) rotateX(20deg)', opacity: '0.7' },
					'100%': { transform: 'translateY(100px) scale(0.8) rotateX(45deg)', opacity: '0' }
				},
				'charging-pulse': {
					'0%, 100%': { boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)', transform: 'scale(1)' },
					'50%': { boxShadow: '0 0 40px rgba(0, 0, 0, 0.3)', transform: 'scale(1.05)' }
				},
				'connectivity-wave': {
					'0%': { transform: 'scale(1)', opacity: '1' },
					'50%': { transform: 'scale(1.2)', opacity: '0.7' },
					'100%': { transform: 'scale(1.4)', opacity: '0' }
				},
				'battery-fill': {
					'0%': { width: '0%' },
					'100%': { width: '100%' }
				},
				'slide-in-left': {
					'0%': { transform: 'translateX(-100px)', opacity: '0' },
					'100%': { transform: 'translateX(0)', opacity: '1' }
				},
				'slide-in-right': {
					'0%': { transform: 'translateX(100px)', opacity: '0' },
					'100%': { transform: 'translateX(0)', opacity: '1' }
				},
				'spin-glow': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' }
				},
				'premium-glow': {
					'0%, 100%': { filter: 'brightness(1) drop-shadow(0 0 20px rgba(0, 0, 0, 0.2))' },
					'50%': { filter: 'brightness(1.1) drop-shadow(0 0 40px rgba(0, 0, 0, 0.4))' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 6s ease-in-out infinite',
				'emerge-from-case': 'emerge-from-case 2s ease-out forwards',
				'retract-to-case': 'retract-to-case 2s ease-out forwards',
				'charging-pulse': 'charging-pulse 2s ease-in-out infinite',
				'connectivity-wave': 'connectivity-wave 3s ease-in-out infinite',
				'battery-fill': 'battery-fill 3s ease-in-out',
				'slide-in-left': 'slide-in-left 0.8s ease-out',
				'slide-in-right': 'slide-in-right 0.8s ease-out',
				'spin-glow': 'spin-glow 2s linear infinite',
				'premium-glow': 'premium-glow 3s ease-in-out infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
