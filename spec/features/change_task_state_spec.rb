
describe 'It should be able to edit', js: true do

  before(:each) do
    visit '/'
  end

  before :all do
    Capybara.ignore_hidden_elements = false
  end

  after :all do
    Capybara.ignore_hidden_elements = true
  end

  it 'task text' do
    find('li:nth-child(3)').find('input[type=text]').set 'New text for old task'
    expect(find('li:nth-child(3)').find('input[type=text]').value).to eql 'New text for old task'
  end

  it 'task description' do
    first('li').click
    first('img').click
    first('textarea').set 'New description!'
    expect(first('textarea').value).to eql 'New description!'
  end

end

describe 'Task', js: true do

  before(:each) do
    visit '/'
  end

  before :all do
    Capybara.ignore_hidden_elements = false
  end

  after :all do
    Capybara.ignore_hidden_elements = true
  end

  it 'should be marked done when checkbox clicked' do
    find('li:nth-child(2)').find('input[type=checkbox]').click
    expect(find('li:nth-child(2)').find('input[type=checkbox]').value).to eql "on"
  end

  it 'done date should change' do
    find('li:nth-child(3)').find('input[type=checkbox]').click
    done_date = find('#root ul li:nth-child(3) .task .task-description .done-date', visible: false)
    expect(done_date.text).to eql Time.now.strftime("%a %b %d %Y %H:%M:%S GMT%z (%Z)")
  end

end
