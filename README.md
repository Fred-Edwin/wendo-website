# Wendo Coffee & Bistro Website

A modern, responsive website for Wendo Coffee & Bistro - a cozy haven for coffee lovers and food enthusiasts in Nyeri, Kenya.

![Wendo Coffee & Bistro](https://images.unsplash.com/photo-1554118811-1e0d58224f24)

## Features

- **Responsive Design** - Fully responsive layout optimized for all devices
- **Modern UI/UX** - Clean, elegant design with smooth animations and transitions
- **SEO Optimized** - Comprehensive metadata, Open Graph tags, and JSON-LD structured data
- **Performance** - Optimized images, lazy loading, and loading skeletons
- **Interactive Menu** - Filterable menu with 14 categories and 100+ items
- **Gallery** - Image gallery with filtering and lightbox functionality
- **Reservations** - Online table booking form with validation
- **Contact Form** - Get in touch with input validation
- **Accessibility** - ARIA labels, keyboard navigation, and semantic HTML
- **WhatsApp Integration** - Floating WhatsApp button for quick contact

## Tech Stack

- **Framework:** [Next.js 15.5.4](https://nextjs.org/) with App Router
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Fonts:** [Google Fonts](https://fonts.google.com/) (Geist, Playfair Display)
- **Deployment:** [Vercel](https://vercel.com/)

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** 18.17 or later
- **npm** or **yarn** package manager
- **Git** (for version control)

## Installation

1. **Clone the repository**

```bash
git clone https://github.com/yourusername/wendo-website.git
cd wendo-website
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
```

3. **Set up environment variables**

Copy the `.env.example` file to `.env.local` and update the values:

```bash
cp .env.example .env.local
```

Edit `.env.local` with your actual values:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000  # Change to your production URL when deploying
NEXT_PUBLIC_PHONE_PRIMARY=0707242987
NEXT_PUBLIC_PHONE_SECONDARY=0722392343
NEXT_PUBLIC_WHATSAPP_NUMBER=254707242987
# ... other variables
```

## Development

Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Building for Production

Create an optimized production build:

```bash
npm run build
# or
yarn build
```

Test the production build locally:

```bash
npm start
# or
yarn start
```

## Deployment

### Deploy to Vercel (Recommended)

The easiest way to deploy this Next.js app is using [Vercel](https://vercel.com):

1. **Push your code to GitHub**

```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. **Import to Vercel**

- Go to [vercel.com/new](https://vercel.com/new)
- Import your GitHub repository
- Vercel will automatically detect Next.js and configure the build settings

3. **Configure Environment Variables**

In your Vercel project settings, add all environment variables from your `.env.example` file with production values.

4. **Deploy**

Click "Deploy" and Vercel will build and deploy your site. You'll get a production URL like `wendo-website.vercel.app`.

5. **Custom Domain** (Optional)

In Vercel project settings, add your custom domain (e.g., `wendocoffee.com`).

### Manual Deployment

You can also deploy to other platforms like Netlify, AWS, or a VPS:

1. Build the project: `npm run build`
2. The output will be in the `.next` folder
3. Follow your hosting provider's Next.js deployment guide

## Project Structure

```
wendo-website/
├── public/                 # Static assets
├── src/
│   ├── app/               # Next.js App Router pages
│   │   ├── about/         # About page
│   │   ├── contact/       # Contact page
│   │   ├── gallery/       # Gallery page
│   │   ├── menu/          # Menu page
│   │   ├── reservations/  # Reservations page
│   │   ├── layout.tsx     # Root layout with metadata
│   │   ├── page.tsx       # Homepage
│   │   ├── not-found.tsx  # 404 page
│   │   ├── sitemap.ts     # Dynamic sitemap
│   │   ├── robots.ts      # Robots.txt
│   │   └── globals.css    # Global styles
│   ├── components/        # React components
│   │   ├── home/          # Homepage components
│   │   ├── layout/        # Layout components (Nav, Footer)
│   │   ├── menu/          # Menu components
│   │   ├── gallery/       # Gallery components
│   │   └── shared/        # Shared components
│   └── lib/
│       └── constants.ts   # Business info and data
├── .env.example           # Environment variables template
├── next.config.ts         # Next.js configuration
├── tailwind.config.ts     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Dependencies and scripts
```

## Pages

- **/** - Homepage with hero, about preview, menu highlights, benefits, and gallery preview
- **/menu** - Full menu with 14 categories and filtering
- **/gallery** - Image gallery with category filtering and lightbox
- **/about** - About page with story, features, and values
- **/reservations** - Table reservation form
- **/contact** - Contact form and business information

## Environment Variables

See `.env.example` for all available environment variables. Key variables include:

- `NEXT_PUBLIC_SITE_URL` - Your website URL
- `NEXT_PUBLIC_WHATSAPP_NUMBER` - WhatsApp number for the floating button
- `NEXT_PUBLIC_PHONE_PRIMARY` - Primary contact phone
- `NEXT_PUBLIC_BUSINESS_EMAIL` - Business email address

## Customization

### Colors

Edit the color palette in `src/app/globals.css`:

```css
@theme inline {
  --color-primary: #3E2723;    /* Dark Brown */
  --color-secondary: #6D4C41;  /* Medium Brown */
  --color-cream: #FFF8E7;      /* Cream */
  --color-beige: #F5F5DC;      /* Beige */
  --color-accent: #E67E50;     /* Orange */
  --color-natural: #4A7C59;    /* Green */
}
```

### Menu Items

Update menu items in `src/lib/constants.ts`:

```typescript
export const MENU_ITEMS: MenuItem[] = [
  {
    id: "espresso",
    name: "Espresso",
    description: "Rich and bold Italian-style espresso",
    prices: [
      { label: "Single", amount: 150 },
      { label: "Double", amount: 200 },
    ],
    image: "https://images.unsplash.com/photo-...",
    category: "coffee",
  },
  // ... add more items
];
```

### Business Information

Update business details in `src/lib/constants.ts`:

```typescript
export const BUSINESS_INFO = {
  name: "Wendo Coffee & Bistro",
  tagline: "Where Every Cup Tells a Story",
  phone: {
    primary: "0707242987",
    secondary: "0722392343",
    whatsapp: "254707242987",
  },
  email: "info@wendocoffee.com",
  address: "Nyeri Town, Nyeri County, Kenya",
  // ... other details
};
```

## SEO

The website includes comprehensive SEO optimization:

- **Meta Tags** - Title, description, keywords for each page
- **Open Graph** - Social media sharing tags
- **Twitter Cards** - Twitter-specific metadata
- **JSON-LD** - LocalBusiness structured data for Google
- **Sitemap** - Dynamic sitemap generation (`/sitemap.xml`)
- **Robots.txt** - Search engine crawling rules (`/robots.txt`)

## Performance

- **Image Optimization** - Next.js Image component with lazy loading
- **Loading States** - Skeleton screens for better perceived performance
- **Code Splitting** - Automatic code splitting via Next.js App Router
- **Font Optimization** - Self-hosted fonts with `next/font`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is proprietary and confidential. All rights reserved by Wendo Coffee & Bistro.

## Contact

**Wendo Coffee & Bistro**

- **Phone:** 0707242987 / 0722392343
- **WhatsApp:** +254707242987
- **Email:** info@wendocoffee.com
- **Location:** Nyeri Town, Nyeri County, Kenya
- **Website:** https://wendocoffee.com

## Support

For technical issues or questions about the website, please contact the development team or create an issue in the repository.

---

Built with ❤️ for Wendo Coffee & Bistro
