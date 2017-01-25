
describe 'Home page', js: true do
  before (:each) { visit '/' }

  it('should content "Todor" header') { within('h1') { expect(page).to have_content 'Todor' } }

  it('should content input for new task') { expect(page).to have_selector 'input[placeholder="What you gonna do?"]' }

  it 'should content demo tasks ' do
    expect(page).to have_selector 'input[value="Visit this page"]'
    expect(page).to have_selector 'input[value="Write some tasks"]'
  end

  it 'should expand task description when click on arrow' do
    first("li").click
    find("img").click
    expect(page).to have_selector '.task-description'
  end

  it 'should content number of done tasks' do
    done_number = all('.done').count
    expect(page).to have_content("Done: " + done_number.to_s)
  end

  it 'should content number of incomplete tasks' do
    tasks_number = all('.task').count
    done_number  = all('.done').count
    expect(page).to have_content("Incompleted: " + (tasks_number - done_number).to_s)
  end

end
