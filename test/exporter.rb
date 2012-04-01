File.open("diamonds.csv", "r") do |f|
  File.open("diamonds.n3","w") do |of|
    of << "@prefix gg: <http://ggplot.org/diamonds/> .\n"
    f.each do |line|
      id, carat, cut, color, clarity, depth, table, price, x, y, z = line.chomp.split(",")
      of << "gg:#{id} a gg:Diamond ;\n"
      of << "\t gg:carat #{carat};\n"
      of << "\t gg:cut \"#{cut}\";\n"
      of << "\t gg:color \"#{color}\";\n"
      of << "\t gg:cut \"#{clarity}\";\n"
      of << "\t gg:depth #{depth};\n"
      of << "\t gg:table #{table};\n"
      of << "\t gg:price #{price};\n"
      of << "\t gg:x #{x};\n"
      of << "\t gg:y #{y};\n"
      of << "\t gg:z #{z}.\n"
    end
  end
end
