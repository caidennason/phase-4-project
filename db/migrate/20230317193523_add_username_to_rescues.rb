class AddUsernameToRescues < ActiveRecord::Migration[6.1]
  def change
    add_column :rescues, :username, :string
  end
end
