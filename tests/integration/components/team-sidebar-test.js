import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | team-sidebar', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`<TeamSidebar />`);

    // assert.isOk(this.element.textContent.trim(), '');

    // Template block usage:
    await render(hbs`
      <TeamSidebar>
        template block text
      </TeamSidebar>
    `);

    // assert.equal(this.element.textContent.trim(), 'template block text');
  });
});
