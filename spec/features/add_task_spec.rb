
describe 'When adding new task', js: true do

  before (:each) { visit '/' }
  before (:all) { Capybara.ignore_hidden_elements = false }
  after  (:all) { Capybara.ignore_hidden_elements = true  }

  it 'list should content new task in list' do
    within("#new-task") { fill_in 'new-task-text', with: "Just created task\n" }
    expect(page).to have_selector 'input[value="Just created task"]'
  end

  it 'form should be cleared' do
    within("#new-task") { fill_in 'new-task-text', with: "Another created task\n" }
    expect(find_field('new-task-text').value).to eql ""
  end

  it 'creation date should be valid' do
    within("#new-task") { fill_in 'new-task-text', with: "Check created date\n" }
    creation_date = find('#root ul li:last-child .task .task-description .creation-date')
    expect(creation_date.text).to eql Time.now.strftime("%a %b %d %Y %H:%M:%S GMT%z (%Z)")
  end

  it 'done date should be "Soon"' do
    within("#new-task") { fill_in 'new-task-text', with: "Check done date\n" }
    creation_date = find('#root ul li:last-child .task .task-description .done-date')
    expect(creation_date.text).to eql "Soon"
  end
end
