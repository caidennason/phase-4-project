# Foster Tracker
- Welcome to Foster Tracker! Foster Tracker is an app made to keep track of which animals are being fostered by which adopters and rescues. Each rescue, animal and adopter have information available on the website. This includes which fosters the rescue is responsible for, and which adopters have the foster.

# Installation
- Go to https://github.com/caidennason/phase-4-project
- Clone the repository into whichever folder you code in
- Make sure you have a reliable internet connection

# MVP
- Adopter Model
  - Create/Read/Delete
- Pet Model (Joins table)
  - Full CRUD
- Rescue Model 
  - Create/Read/Delete
- Routes
  - Home
  - Adopter
  - Pet
  - Rescue
- Auth
  - Rescues are the only ones who can log in and create, edit or delete the data. Rescues can delete pets that belong to them only. Rescues can edit pets though, as long as they are signed in. 

- Controllers
  - Adopter
  - Pet
  - Rescue
  - Sessions

- Serializers
  - Adopter
  - Pet
  - Rescue

# Stretch
- Full CRUD for all models
- Better design
- More advanced React hooks