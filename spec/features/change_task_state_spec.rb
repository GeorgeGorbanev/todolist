
describe 'It should be able to edit', js: true do

  before (:each) { visit '/' }
  before (:all) { Capybara.ignore_hidden_elements = false }
  after  (:all) { Capybara.ignore_hidden_elements = true  }

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

  before(:each) { visit '/' }
  before(:all) { Capybara.ignore_hidden_elements = false }
  after(:all) { Capybara.ignore_hidden_elements = true  }

  it 'should be marked done when checkbox clicked' do
    find('li:nth-child(2)').find('input[type=checkbox]').click
    expect(find('li:nth-child(2)')).to have_selector('div.done')
  end

  it 'done date should change' do
    find('li:nth-child(3)').find('input[type=checkbox]').click
    actual_done_date = Time.now.strftime("%a %b %d %Y %H:%M:%S GMT%z (%Z)")
    page_done_date = find('#root ul li:nth-child(3) .task .task-description .done-date')
    expect(page_done_date.text).to eql actual_done_date
  end

  it 'should be marked undone when checkbox clicked' do
    find('li:nth-child(2)').find('input[type=checkbox]').click
    expect(find('li:nth-child(2)')).not_to have_selector('div.done')
  end

  it 'done date should change when task unmarked' do
    find('li:nth-child(3)').find('input[type=checkbox]').click
    done_date = find('#root ul li:nth-child(3) .task .task-description .done-date')
    expect(done_date.text).to eql "Soon"
  end

  it 'should be able to remove' do
    within("#new-task") { fill_in 'new-task-text', with: "Task to remove\n" }
    find('#root ul li:last-child').click
    find('#root ul li:last-child').find('img').click
    find('#root ul li:last-child .task .task-description .remove-task').click
    expect(page).not_to have_selector('input[value="Task to remove"]', visible: true)
  end
end


describe 'On summary panel', js: true do

  before (:each) { visit '/' }

  it 'click on "All done" should mark all tasks done' do
    find('a', text: 'All done').click
    expect(all('.task').count).to eql all('.done').count
  end

  it 'click on "Remove done" should remove all marked tasks' do
    find('li:nth-child(1) input[type=checkbox]').click
    find('li:nth-child(2) input[type=checkbox]').click
    find('a', text: 'Remove done').click
    expect(all('.task').count).to eql 2
  end
end
