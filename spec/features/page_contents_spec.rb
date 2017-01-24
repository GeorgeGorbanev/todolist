
describe 'Home page', js: true do
  before(:each) do
    visit '/'
  end

  it 'should contents "Todor" header' do
    within 'h1' do
      expect(page).to have_content 'Todor'
    end
  end

  it 'should contents input for new task ' do
    expect(page).to have_selector 'input[placeholder="What you gonna do?"]'
  end

  it 'should contents demo tasks ' do
    expect(page).to have_selector 'input[value="Visit this page"]'
    expect(page).to have_selector 'input[value="Write some tasks"]'
  end
end
