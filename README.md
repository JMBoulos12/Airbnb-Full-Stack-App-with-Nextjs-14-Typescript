### Next App

### Remove Boilerplate
- layout.tsx
- get a hold of the README.MD

### Create Pages

- bookings
- checkout
- favorites
- profile
- properties
- rentals
- reviews

- new file - pageName/page.tsx

### Shadcn/ui

[Docs](https://ui.shadcn.com/)

[Next Install](https://ui.shadcn.com/docs/installation/next)

```sh
npx shadcn@latest init

```

- New York
- Zinc

```sh
npx shadcn@latest add button
```

```sh
npx shadcn@latest add breadcrumb calendar card checkbox dropdown-menu input label popover scroll-area select separator table textarea toast skeleton
```

- components
  - ui
  - card
  - form
  - home
  - navbar
  - properties

### Navbar - Setup

- create

- navbar
  - DarkMode.tsx
  - LinksDropdown.tsx
  - Logo.tsx
  - Navbar.tsx
  - NavSearch.tsx
  - SignOutLink.tsx
  - UserIcon.tsx

### Tailwind Custom Class

globals.css

### Navbar - Structure

### Logo

[React Icons](https://react-icons.github.io/react-icons/)

### NavSearch

### Theme

- replace css variables in in globals.css

### Providers

- create app/providers.tsx

layout.tsx

### DarkMode

- create app/theme-provider.tsx

providers.tsx

### DarkMode

- make sure you export as default !!!

### UserIcon

### Links Data

- create utils/links.ts

### LinksDropdown

### Clerk

[Clerk Docs](https://clerk.com/)
[Clerk + Next.js Setup](https://clerk.com/docs/quickstarts/nextjs)

- create new application

- create .env.local

In Next.js, environment variables that start with NEXT*PUBLIC* are exposed to the browser. This means they can be accessed in your front-end code.

For example, NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY can be used in both server-side and client-side code.

On the other hand, CLERK_SECRET_KEY is a server-side environment variable. It's not exposed to the browser, making it suitable for storing sensitive data like API secrets.

layout.tsx

- create middleware.ts

- restart dev server

### SignUp/SignIn and Customize Avatar (optional)

- customization
  - avatars

### Toast Component

### SignOutLink

- redirectUrl

### LinksDropdown - Complete

### Direct User

.env.local

### Create Profile

- profile
  - create

### FormInput

- components/form/FormInput.tsx

### Default Submit Button

- components/form/Buttons.tsx

### FormContainer

- create components/form/FormContainer.tsx

- create utils/types.ts

### Create Profile - Refactor

### Zod

Zod is a JavaScript library for building schemas and validating data, providing type safety and error handling.

- create utils/schemas.ts
- create utils/actions.ts
- import in profile/create page.tsx

### Supabase

- create account and organization
- create project
- setup password in .env (optional)
- add .env to .gitignore !!!
- it will take few minutes

### Prisma

- install prisma vs-code extension

Prisma ORM is a database toolkit that simplifies database access in web applications. It allows developers to interact with databases using a type-safe and auto-generated API, making database operations easier and more secure.

- Prisma server: A standalone infrastructure component sitting on top of your database.
- Prisma client: An auto-generated library that connects to the Prisma server and lets you read, write and stream data in your database. It is used for data access in your applications.

### Setup Instance

In development, the command next dev clears Node.js cache on run. This in turn initializes a new PrismaClient instance each time due to hot reloading that creates a connection to the database. This can quickly exhaust the database connections as each PrismaClient instance holds its own connection pool.

(Prisma Instance)[https://www.prisma.io/docs/guides/other/troubleshooting-orm/help-articles/nextjs-prisma-client-dev-practices#solution]

- create utils/db.ts

### Connect Supabase with Prisma

[Useful Info](https://supabase.com/partners/integrations/prisma)

- add to .env

- DATABASE_URL : Transaction + Password + "?pgbouncer=true&connection_limit=1"
- DIRECT_URL : Session + Password

## Optional - Prisma Crud

[Prisma Docs](https://www.prisma.io/docs/concepts/components/prisma-client/crud)

- Get All Records
- Get record by ID or unique identifier
- Update Record
- Update or create records
- Delete a single record

### Profile Model

### CreateProfile Action - Complete

[Clerk User Metadata](https://clerk.com/docs/users/metadata)

### FetchProfileImage

actions.ts

- components/navbar/UserIcon.tsx

### Modify Create Profile

### Update Profile

actions.ts

app/profile/page.tsx

actions.ts

### Alternative Error Handling
actions.ts

### ValidateWithZodSchema
schemas.ts
actions.ts

### ImageInput
components/form/ImageInput.tsx

### SubmitButton

### ImageInputContainer
components/form/ImageInputContainer.tsx

### updateProfileImageAction
actions.ts

### Profile Page

### Remote Patterns

### imageSchema

schemas.ts

The .refine() method in Zod is used to add custom validation to a Zod schema. It takes two arguments:

A function that takes a value and returns a boolean. This function is the validation rule. If it returns true, the validation passes. If it returns false, the validation fails.
A string that is the error message to be returned when the validation fails.

### updateProfileImageAction

### Create Bucket, Setup Policy and API Keys

### Setup Supabase

utils/supabase.ts

### updateProfileImageAction

### Remote Patterns

### Property Model

### Property Schema
schemas.ts

### createPropertyAction
actions.ts

### Create Rental Page
- app/rentals/create/page.tsx

### Price Input
- components/form/PriceInput.tsx

### Categories Data
- utils/categories.ts

### Categories Input

### TextArea Input
- components/form/TextAreaInput.tsx

### Countries Input
- utils/countries.ts
- components/form/CountriesInput.tsx

### Accommodation / Counter Input
- components/form/CounterInput.tsx

### Amenities
- utils/amenities.ts
- components/form/AmenitiesInput.tsx

### createRentalAction

### fetchProperties
utils/types.ts
actions.ts

### Home Page
- create in components/home
  - CategoriesList.tsx
  - EmptyList.tsx
  - PropertiesContainer.tsx
  - PropertiesList.tsx

### Search Params

### CategoriesList

### EmptyList

### PropertiesContainer

### Card Components
- components/card
  - CountryFlagAndName.tsx
  - FavoriteToggleButton.tsx
  - FavoriteToggleForm.tsx
  - LoadingCards.tsx
  - PropertyCard.tsx
  - PropertyRating.tsx

### PropertiesList

### formatCurrency
- utils/format.ts

### PropertyCard

### Property Rating

### FavoriteToggleButton

### CountryFlagAndName

### Suspense
- app/loading.tsx - always an option
components/card/LoadingCards.tsx

app/page.tsx
- navigate to a different page, refresh and then navigate back to home page
- make sure you fetch in component not page

### Favorites Model

### CardSignInButton
components/form/Buttons.tsx
components/card/FavoriteToggleButton.tsx

### fetchFavorite
actions.ts

### FavoriteToggleButton - Complete

### CardSubmitButton
components/form/Buttons.tsx

### FavoriteToggleForm

### toggleFavoriteAction
actions.ts

### fetchFavorites
actions.ts

### Favorites Page
- favorites/page.tsx

### fetchPropertyDetails
- utils/actions.ts
- properties/[id]/loading.tsx
- properties/[id]/page.tsx

### BreadCrumbs
- components/properties/BreadCrumbs.tsx
- properties/[id]/page.tsx

### ShareButton
[React Share](https://www.npmjs.com/package/react-share)

- components/properties/ShareButton.tsx
- properties/[id]/page.tsx

### ImageContainer
- components/properties/ImageContainer.tsx
- properties/[id]/page.tsx

### Col Layout
- properties/[id]/page.tsx

### Calendar - Initial Setup
- components/properties/booking/BookingCalendar.tsx
- properties/[id]/page.tsx

### PropertyDetails
- utils/format.ts
- components/properties/PropertyDetails.tsx
- properties/[id]/page.tsx

### UserInfo
- components/properties/UserInfo.tsx
- properties/[id]/page.tsx

### Description
- components/properties/Title.tsx
- components/properties/Description.tsx
- properties/[id]/page.tsx

### Amenities
- components/properties/Amenities.tsx
- properties/[id]/page.tsx

### PropertyMap

[React Leaflet](https://react-leaflet.js.org/)

Leaflet makes direct calls to the DOM when it is loaded, therefore React Leaflet is not compatible with server-side rendering.
nts/properties/PropertyMap.tsx
- properties/[id]/page.tsx

Lazy Loading: Components wrapped with dynamic are lazy loaded. This means that the component code is not loaded until it is needed. For example, if you have a component that is only visible when a user clicks a button, you could use dynamic to ensure that the code for that component is not loaded until the button is clicked.

Server Side Rendering (SSR) Control: By default, Next.js pre-renders every page. This means that it generates HTML for each page in advance, instead of doing it all on the client-side. However, with dynamic, you can control this behavior. You can choose to disable SSR for specific modules, which can be useful for modules that have client-side dependencies.

### Deploy

- refactor NavSearch Component

### Review Model

DON'T FORGET !!!!

```sh
npx prisma db push
```

- restart server

### Reviews Setup

- create components/reviews
  - Comment.tsx
  - PropertyReviews.tsx
  - Rating.tsx
  - SubmitReview.tsx
  - ReviewCard.tsx
- create placeholder functions in actions.ts


### RatingInput
- components/form/RatingInput.tsx

### SubmitReview Component
- app/properties/[id]
- components/reviews/SubmitReview.tsx
- optional : set rows prop in TextArea.tsx

### Submit Review
- utils/schemas.ts
- action.ts

### Fetch Property Reviews
- actions.ts

### Render Reviews
- app/properties/[id]
- components/reviews/PropertyReviews.tsx

### ReviewCard Component

### Rating

### Comment

### Fetch User's Reviews and Delete Review

### Icon Button
- components/form/Buttons.tsx

### Reviews Page
- app/reviews/page.tsx
- loading.tsx

### Allow Review
- actions.ts
- app/properties/[id]

Prisma's findUnique and findFirst methods are used to retrieve a single record from the database, but they have some differences in their behavior:

- findUnique: This method is used when you want to retrieve a single record that matches a unique constraint or a primary key. If no record is found, it returns null.

- findFirst: This method is used when you want to retrieve a single record that matches a non-unique constraint. It can also be used with ordering and filtering. If no record is found, it returns null.

In summary, use findUnique when you're sure the field you're querying by is unique, and use findFirst when you're querying by a non-unique field or need more complex queries with ordering and filtering.

### PropertyRating - Complete
- actions
- components/card/PropertyRating.tsx

### Booking Model
- schema.prisma
- restart server !!!

### Fetch Bookings
- actions.ts

### Booking Types
- utils/types.ts

### Booking Components
- remove @/components/properties/BookingCalendar.tsx
- create @/components/booking
  - BookingCalendar.tsx
  - BookingContainer.tsx
  - BookingForm.tsx
  - BookingWrapper.tsx
  - ConfirmBooking.tsx

### Zustand
[Docs](https://docs.pmnd.rs/zustand/getting-started/introduction)

### Setup Store
- utils/store.ts

### BookingWrapper
- properties/[id]/page.tsx

### Helper Functions
- utils/calendar.ts

### BoookingCalendar

### BookingContainer

### CalculateTotals
- utils/calculateTotals.ts

### BookingForm

### ConfirmBooking
- action.ts

### CreateBookingAction

### Blocked Periods/Dates
BookingCalendar.tsx

### Unavailable Dates
BookingCalendar.tsx

### Fetch Bookings and Delete Booking
- actions.ts

### Bookings Page
- utils/format.ts
- 
Bookings.tsx

### LoadingTable
- create @/components/booking/LoadingTable.tsx
- create app/bookings/loading.tsx

### Fetch and Delete Rentals
- actions.ts

### Rentals Page
- create rentals/loading.tsx

### Fetch Rental Details
- actions.ts

### Rentals Edit Page
- rentals/[id]/edit/page.tsx

### Amenities Input

### Update Property Action

### Update Property Image Action

### Reservations
- in app/reservations create page.tsx and loading.tsx
- add to links
utils/links.ts

### Fetch Reservations

### Reservations Page

### Admin User - Setup
- create app/admin/page.tsx
- add admin to links
- create components/admin
  - Chart.tsx
  - ChartsContainer.tsx
  - Loading.tsx
  - StatsCard.tsx
  - StatsContainer.tsx

### Admin User - Middleware
- refactor middleware
- create ENV variable with userId
- add to VERCEL

### Admin User - LinksDropdown
- LinksDropdown.tsx

### Admin User - Loading

### Admin User - Main Page

### Admin User - Fetch Stats

### Admin User - StatsContainer

### Admin User - StatsCard

### Admin User - Fetch Charts Data
format.ts

### Admin User - ChartsContainer

### Recharts
[Recharts](https://recharts.org/en-US/)

### Admin User - Chart Component

### Stripe
[Embedded Form](https://docs.stripe.com/checkout/embedded/quickstart)
- setup and add keys to .env
- install


### Refactor createBookingAction

### Checkout Page

### API - Payment Route
api/payment/route.ts

### API - Confirm Route
api/confirm/route.ts

### Refactor Actions
- remove all bookings with 'paymentStatus' false, before creating a booking
  createBookingAction.ts
- Check for 'paymentStatus' when fetching bookings
  - fetchBookings
  - rentalsWithBookingSums
  - fetchReservations
  - fetchStats
  - fetchChartsData

### Reservation Stats
- actions.ts
- create components/reservations/Stats.tsx
- refactor StatsCard.tsx
- render in reservations

### 🚀🚀🚀 THE END 🚀🚀🚀
