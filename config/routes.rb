Storit::Application.routes.draw do
  mount Ckeditor::Engine => '/ckeditor'  
  resources :sections

  resources :applications

  resources :content_blocks

  resources :users
  
  match '/home', to: 'public_pages#home'
  match '/contact', to: 'public_pages#contact'
  match '/ip', to: 'public_pages#ip'
  match '/ip_experts', to: 'public_pages#ip_experts'
  match '/ip_benefits', to: 'public_pages#ip_benefits'
  match '/it', to: 'public_pages#it'
  match '/upov', to: 'public_pages#upov'
  match '/about', to: 'public_pages#about'
  match '/wipo', to: 'public_pages#wipo'
  match '/wto-trips', to: 'public_pages#wto-trips'
  match '/cbd', to: 'public_pages#cbd'
  match '/admin/ip', to: 'editable_pages#ip_overview'
  match '/admin/history', to: 'editable_pages#content_block_history'
  match '/admin/back', to: 'editable_pages#back'
  match '/signup',  to: 'users#new'
  # The priority is based upon order of creation:
  # first created -> highest priority.

  # Sample of regular route:
  #   match 'products/:id' => 'catalog#view'
  # Keep in mind you can assign values other than :controller and :action

  # Sample of named route:
  #   match 'products/:id/purchase' => 'catalog#purchase', :as => :purchase
  # This route can be invoked with purchase_url(:id => product.id)

  # Sample resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Sample resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Sample resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Sample resource route with more complex sub-resources
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', :on => :collection
  #     end
  #   end

  # Sample resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end

  # You can have the root of your site routed with "root"
  # just remember to delete public/index.html.
  # root :to => 'welcome#index'

  # See how all your routes lay out with "rake routes"

  # This is a legacy wild controller route that's not recommended for RESTful applications.
  # Note: This route will make all actions in every controller accessible via GET requests.
  # match ':controller(/:action(/:id))(.:format)'

end
