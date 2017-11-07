Rails.application.routes.draw do
  scope '/api' do
    get :expenses, to: 'expenses#index'
  end
end
