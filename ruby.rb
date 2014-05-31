class Me 
  attr_accessor :name, :hobbies, :aspiration 

  def initialize
  	@name = "Valentin DRUON"
  	@hobbies = ["Guitare", "Coding", "Learning", "Les Misérables"]
  	@aspiration = "get a first significant experience in Ruby on Rails development"
  end

  def introduce		
  	"Hi ! I'm #{@name}, a french student in Software Bachelor of Engineering, who aspire to #{@aspiration}. I'm fond of #{@hobbies.join(',')} and Superman above all."
  end	
end