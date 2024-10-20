# Upcoming TODOs

## Development ease

- [X] Create some [common snippets](https://code.visualstudio.com/docs/editor/userdefinedsnippets#_create-your-own-snippets)
  - Start with below
    ```javascript
    // Snippet #1
    <View style={ruffwind``}></View>
    // Snippet #2
    style={ruffwind``}
    ```
  - Note: This updated in `~/Library/Application Support/Code/User/snippets/typescriptreact.json`
- [ ] Personal side quest: what happened with script generation of Week 43?
  - [ ] Personal side quest: when should it generate?
- [ ] Personal side quest: when should it generate
- [ ] Personal side quest: fix tasks from duplicating
- [ ] Personal side quest: fix typography

## Finish framing and styles on SearchFilters page

- [x] Put in mock time of day (either radio placeholder or input)
- [x] Radio group - handle flex direction
- [ ] Add styles for search button and clear filters link
- [ ] Test bottomsheet for date (create a simple button to open bottomsheet just ot make sure things are copasetic)
- [ ] Test input opens keyboard on dashboard and filters page

## Setup on other computer

- [ ] Merge "Finish framing and styles on SearchFilters page" work
- [ ] Download onto other laptop
- [ ] Document any setup discrepencies
- [ ] Push updates to README

## Add framing and styles on SearchResults page

- [ ] Add base styles and framing
- [ ] Add filters modal styles and framing
- [ ] Add mock map (image is fine)
- [ ] Add mock search results

## Can I send a base build to Sara?

- [ ] Ensure navigation goes to _coming soon_ pages
- [ ] Final "walk though of pet profiles and dashboard/search pages to confirm workflows"
- [ ] Add app icon to build
- [ ] Expo build and export

## Add new form components

- [ ] Add checkbox group component
- [ ] Implement checkbox group in search filters page
- [ ] Add date picker component
- [ ] Handle single date selection
- [ ] Handle range selection
- [ ] Add date picker modal
- [ ] Add date picker dropdown
- [ ] Implement date picker in search filters page
- [ ] Update Button with count notification
- [ ] Add Dropdown with count notification
- [ ] Add price range selector component

## Handle map

- [ ] Test different maps
- [ ] Build protoype with behaviors
  - [ ] Zoom in
  - [ ] See visible circle range
  - [ ] Handle grouping caretakers by section to protect privacy
  - [ ] What is the physical radius we need to adhere to?
  - [ ] Handle selecting a price on map, opens caretaker profile in modal
  - [ ] Modal can slide up for more information
  - [ ] Modal is scrollable
  - [ ] Handle how multiple prices stacked in a map are still visible
  - [ ] How can we prevent them from fully stacking? Or... if we stack.. can we open some sort of secondary screen? Or if we stack and click on a stack - can all results in a stack appear in the results bottomsheet? (last option seems smallest level of lift and easiest accessibility)
  - [ ] Ideation:
    - [ ] if a stack has <= 3, display all three prices next to each other
    - [ ] if a stack has > 3, display "from $XX (3+)"
    - [ ] if they click on that, it opens all results in that stack in the results modal as list instead of a single profile with a header that lets you know your in the stack and can take you back to your previous view/search/etc

## Form and API work

- [ ] Dashboard
- [ ] Add location search input using mock location API
- [ ] Implement location serach input in search filters page and search dashboard page
- [ ] Implement favoriting with mock API call
- [ ] Ensure navigation goes to _coming soon_ pages
- [ ] Filters
- [ ] Convert to form
- [ ] Manage clear all button
- [ ] Manage submit to search API
- [ ] Results
- [ ] Add styles and framing
- [ ] Add filters modal styles and framing
- [ ] Add map handling and styles
- [ ] Add search results displaying
- [ ] Handle filters form
- [ ] Handle filters submission to caretakers search API and refresh on page
- [ ] Handle dropdown count notification on filters and pets
- [ ] Handle date dropdown
- [ ] Handle date submission to caretakers search API and refresh on page
- [ ] Handle my pets dropdown
- [ ] Handle my pets submission to caretakers search API and refresh on page
- [ ] Handle no pets and going to access or pet profile splash pages
- [ ] Update filters based on selected pet(s)

## Backend work

- [ ] Add caretakers API using mock db data
- [ ] Source and add location API wrapper
- [ ] Add caretaker search service
- [ ] Add petowner api
- [ ] Add access workflows
- [ ] account api
- [ ] passwordless login via email
- [ ] social via google
- [ ] social via apple
- [ ] Add pet profile api
- [ ] Research a cloud option for things like images and other pieces - probably start with AWS b/c easy enough to get started
- [ ] Add image saving pathway - firebase? s3? etc?

## Cleanup

- [ ] Jest tests for every UI component
- [ ] Rspec tests for every unit and integration
- [ ] Implement basic testing CI
- [ ] Can I afford to spend time on e2e?
- [ ] Cypress?
- [ ] Capybara?
- [ ] Option 3?

## Access workflows

- [ ] Add onboarding pages
- [ ] Add email workflow pages
- [ ] Add guest workflow pages
- [ ] Add profile setup pages
- [ ] Add apple login workflow pages
- [ ] Add google login workflow pages
- [ ] Add app icon to build
- [ ] Research and add splash animation

## Next work

- [ ] Access needed profile splash updates
- [ ] Caretaker profile
- [ ] Booking prototype
- [ ] Account prototype

## Next next steps

- [ ] Messaging prototype
- [ ] Petowner view prototype
- [ ] Pet profile view prototype
- [ ] Caretaker account creation prototype

## Future work [if Sara designs]

- [ ] Petowner profile view
- [ ] Pet profile view
- [ ] Bookings
- [ ] Account
- [ ] Messaging
- [ ] Caretaker account creation
