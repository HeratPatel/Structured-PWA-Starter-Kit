import { html } from '@polymer/lit-element';
import { PageViewElement } from '../../utils/page-view-elemet';
import { SharedStyles } from '../../styles/shared-styles';
// redux helpers
import { connect } from 'pwa-helpers/connect-mixin';
import { store } from '../../redux/store';
import { fetchNewStories } from '../../redux/newest/actions';

export class New extends connect(store)(PageViewElement) {
    static get properties() {
        return {
            newStories: Array
        };
    }

    _stateChanged(state) {
        this.newStories = state.newest.newStories;
    }

    _firstRendered(){
        store.dispatch(fetchNewStories(1));
    }

    _render() {
        return html`
      <!-- Styles -->
      ${SharedStyles}
      <!-- Content -->
      <section>
        <h2>New</h2>        
      </section>
    `;
    }
}