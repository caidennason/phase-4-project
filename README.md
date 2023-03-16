# Foster Tracker
- Welcome to Foster Tracker! Foster Tracker is an app made to keep track of which animals have been rescued by which adopters. Each rescue, animal and adopter have information available on the website. This includes which fosters the rescue had, and which adopters have the foster.

# Installation

# MVP
- Adopter Model
  - Create/Read
- Pet Model (Joins table)
  - Full CRUD?
- Rescue Model 
  - Create/Read
- Routes
  - Home
  - Adopter
  - Pet
  - Rescue
- Auth
  - Rescues are the only ones who can log in and create, edit or delete the data.

- Controllers
  - Adopter
  - Pet
  - Rescue
  - Sessions

# Stretch
- Full CRUD for all models

// enoch questions
  1) is there a way to create something without it having a foreign key? i want to make a pet without it belonging to anyone - how can i do that? private params? or since it belongs to something, that thing needs to exist before it's made?
  2) is calling my User model Rescue okay? Rescue is the user in this app
  3) useContext -- can you place that in the component that is reliant on it? ex: get request to pets lives in the pets component? is prop drilling just for whether a user is signed in? 

  1 component needs state, doesnt need context. if mroe than 1, it does.

why won't boot strap work!!!!!!