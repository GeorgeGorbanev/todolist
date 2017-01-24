
describe 'When adding new task', js: true do

  before :all do
    Capybara.ignore_hidden_elements = false
  end

  after :all do
    Capybara.ignore_hidden_elements = true
  end

  it 'list should contents new task in list' do
    visit '/'
    within("#new-task") do
      fill_in 'new-task-text', with: "Just created task\n"
    end
    expect(page).to have_selector 'input[value="Just created task"]'
  end

  it 'form should be cleared' do
    visit '/'
    within("#new-task") do
      fill_in 'new-task-text', with: "Another created task\n"
      expect(find_field('new-task-text').value).to eql ""
    end
  end

  it 'creation date should be valid' do
    visit '/'
    within("#new-task") do
      fill_in 'new-task-text', with: "Check created date\n"
    end
    creation_date = find('#root ul li:last-child .task .task-description .creation-date')
    expect(creation_date.text).to eql Time.now.strftime("%a %b %d %Y %H:%M:%S GMT%z (%Z)")
  end
end
