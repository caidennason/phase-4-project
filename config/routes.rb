Rails.application.routes.draw do
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  # get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

  get '/pets', to: "pet#index"
  get '/rescues', to: "rescue#index"
  get '/adopters', to: "adopter#index"
  get '/pets/:id', to: "pet#show"

  delete '/pets/:id', to: "pet#delete"

  post '/pets', to: "pet#create"
  post '/adopters', to: "adopter#create"

  post '/signup', to: "rescue#create"
  post '/login', to: "session#create"
  delete '/logout', to: "session#destroy"

end
