guard 'coffeescript', input: 'javascripts' do
  callback(:start_begin) do
    fork do
      `rackup`
    end
  end
end
