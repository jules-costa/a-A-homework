class Queue

  attr_accessor :queue

  def initialize
    @queue = []
  end

  def enqueue(el)
    queue.unshift(el)
  end

  def dequeue
    queue.pop
  end

  def show
    p queue
  end

end

q = Queue.new
p q.enqueue(1)
p q.enqueue(2)
p q.enqueue('noodle')
p q.dequeue
p q.dequeue
p q.show
