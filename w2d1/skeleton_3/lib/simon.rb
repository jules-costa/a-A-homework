class Simon
  COLORS = %w(red blue green yellow)

  attr_accessor :sequence_length, :game_over, :seq

  def initialize
    @sequence_length = 1
    @game_over = false
    @seq = []
  end

  def play
    until @game_over
      take_turn
    end
    game_over_message
    reset_game
  end

  def take_turn
    unless @game_over
      show_sequence
      require_sequence
      round_success_message
      @sequence_length += 1
    end
  end

  def show_sequence
    add_random_color
  end

  def require_sequence
    puts "Your turn!"

    @seq.each do |color|
      guess = gets.chomp.downcase
        @game_over = true if guess != color
    end
    @game_over = false
  end

  def add_random_color
    @seq << COLORS.sample
  end

  def round_success_message
    puts "Great memory!"
  end

  def game_over_message
    puts "Womp."
  end

  def reset_game
    @sequence_length = 1
    @game_over = false
    @seq = []
  end
end
