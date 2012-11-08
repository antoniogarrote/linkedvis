Dir["data/*"].sort.each do |f|
    puts f
    puts `node benchmark.js #{f}`
end