# Foster Tracker
- Welcome to Foster Tracker! Foster Tracker is an app made to keep track of which animals have been rescued by which adopters. Each rescue, animal and adopter have information available on the website. This includes which fosters the rescue had, and which adopters have the foster.

# Installation

# MVP
- Adopter Model
  - Create/Read
- Pet Model (Joins table)
  - Full CRUD
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
  1) is there a way to create something without it having a foreign key? i want to make a pet without it belonging to anyone - how can i do that? private params?
  2) is calling my User model Rescue okay? Rescue is the user in this app