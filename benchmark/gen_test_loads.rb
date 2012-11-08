acum = [];
current = [];

File.open("diamonds.n3") do |f|
  
  f.each do |l|
    if l.index("@").nil?
      if l.index("a gg:Diamond") 
        acum << current.join("")
        current = []
        current << l
      else
        current << l
      end
    end
  end
  
end

SIZES = [50, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750, 800, 850]

string = ""
size_index = 0

acum.each_with_index do |d,i|

  string = string + d
  if i == SIZES[size_index]
    File.open("#{SIZES[size_index]}_test.n3", "w") do |f|
      f << "@prefix gg: <http://ggplot.org/diamonds/> .\n"
      f << string
    end
    size_index += 1
  end
end
