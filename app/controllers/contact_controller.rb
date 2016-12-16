class ContactController < ApplicationController
  def index
  end

  def create  	
  	contact = Contact.new(contact_params)
  	if contact.save
  		render json: {message: "Contact saved. Thanks!"}
  	else
  		render json: {message: "There was an error. Try again."}
  	end
  end

  private

  def contact_params
  	params.permit(:firstname, :lastname, :email, :message)
  end
end
