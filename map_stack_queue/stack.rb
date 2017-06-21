class Stack
  attr_accessor :stack

  def initialize
    @stack = []
  end

  def add(el)
    stack << el
  end

  def remove
    stack.pop
  end

  def show
    p stack
  end

end

s = Stack.new
p s.add(1)
p s.add(2)
p s.add(3)
p s.remove
p s.remove
p s.add('noodle')
# s.show
