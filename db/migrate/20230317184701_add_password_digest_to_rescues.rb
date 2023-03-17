class AddPasswordDigestToRescues < ActiveRecord::Migration[6.1]
  def change
    add_column :rescues, :password_digest, :string
  end
end
