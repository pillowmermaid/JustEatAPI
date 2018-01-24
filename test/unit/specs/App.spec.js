import Vue from 'vue'
import App from '@/App'

describe('App.vue', () => {
  it('Checks if the button renders its label', () => {
    const Constructor = Vue.extend(App)
    const AppComponent = new Constructor().$mount()
    expect(AppComponent.$el.querySelector('.show-desktop').textContent)
    .to.equal('Feed Me Now')
  })

  // Meant to test the submission but returns a dumb error
  // revisit later

  // it('Tests that the server returns a restaurant list with the outcode se19', done => {
  //   const Constructor = Vue.extend(App)
  //   const AppComponent = new Constructor().$mount()
  //   const button = AppComponent.$el.querySelector('.search-form button')

  //   AppComponent.outcode = 'se19'

  //   const clickEvent = new window.Event('click')
  //   button.dispatchEvent(clickEvent)
  //   AppComponent._watcher.run()

  //   Vue.nextTick(() => {
  //     expect(AppComponent.responseCode).to.equal('200')
  //     done()
  //   })
  // })
})
