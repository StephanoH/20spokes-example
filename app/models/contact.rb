class Contact < ActiveRecord::Base
	validates :firstname, :lastname, :email, :message, presence: true
end