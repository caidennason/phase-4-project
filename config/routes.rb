Rails.application.routes.draw do
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  # get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

  get '/pets', to: "pet#index"
  get '/rescues', to: "rescue#index"
  get '/adopters', to: "adopter#index"
  get '/pets/:id', to: "pet#show"

  delete '/pets/:id', to: "pet#delete"
  delete '/rescues/:id', to: "rescue#delete"

  post '/pets', to: "pet#create"
  post '/adopters', to: "adopter#create"

  patch '/pets/:id', to: "pet#update"

  post '/signup', to: "rescue#create"
  post '/login', to: "session#create"
  delete '/logout', to: "session#destroy"
  get '/me', to: "rescue#show"

end
