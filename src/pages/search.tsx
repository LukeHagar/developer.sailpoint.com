import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import algoliasearch from 'algoliasearch/lite';
import React from 'react';
import {
  ClearRefinements,
  Configure,
  CurrentRefinements,
  DynamicWidgets,
  Highlight,
  Hits,
  HitsPerPage,
  Index,
  InstantSearch,
  Pagination,
  PoweredBy,
  RefinementList,
  SearchBox,
} from 'react-instantsearch';

import 'instantsearch.css/themes/satellite-min.css';
import aa from 'search-insights';
import {Panel} from '../components/Search/Panel';
import {Refresh} from '../components/Search/Refresh';
import './search.css';

function DocHit({hit}) {
  console.log(hit);
  return (
    <>
      <a rel="noreferrer" target="_blank" href={hit.url}>
        <div className="resultCategory">
          {hit.hierarchy.lvl0}
          {hit.hierarchy.lvl1 == hit.hierarchy.lvl0
            ? ''
            : ' | ' + hit.hierarchy.lvl1}
        </div>
        <div>{hit.hierarchy.lvl2}</div>
        <Highlight hit={hit} attribute={'content'}></Highlight>
        <div className="resultTags">{hit.tags.join(', ')}</div>

        <div className="resultLink">{hit.url_without_anchor}</div>
      </a>
    </>
  );
}

function ForumHit({hit}) {
  return (
    <>
      <a
        rel="noreferrer"
        target="_blank"
        href={'https://developer.sailpoint.com/discuss' + hit.url}>
        <div className="resultCategory">{hit.category.name}</div>
        <div>{hit.topic.title}</div>
        <span className="resultTags">{hit.topic.tags.join(', ')}</span>

        <div className="resultLink">
          {'https://developer.sailpoint.com/discuss' + hit.url}
        </div>
      </a>
    </>
  );
}

export default function Search() {
  const {siteConfig} = useDocusaurusContext();
  const {appId, apiKey, indexName} = siteConfig.themeConfig.algolia as {
    appId: string;
    apiKey: string;
    indexName: string;
  };
  const searchClient = algoliasearch(appId, apiKey);
  aa('init', {
    appId: appId,
    apiKey: apiKey,
    useCookie: true,
  });

  let anonymousUserToken;

  aa('getUserToken', {}, (err, userToken) => {
    if (err) {
      console.error(err);
      return;
    }

    anonymousUserToken = userToken;
  });

  if (anonymousUserToken) {
    aa('setUserToken', anonymousUserToken);
  }

  return (
    <Layout description="Search our code, content, or community.">
      <main>
        <InstantSearch
          searchClient={searchClient}
          indexName={indexName}
          routing={true}
          insights={true}>
          <Configure />

          <div className="Container">
            <div className="Refinements">
              <DynamicWidgets facets={['*']}>
                <Panel header="Categories">
                  <RefinementList
                    attribute="hierarchy.lvl0"
                    searchablePlaceholder="Search Categories"
                    showMore={true}
                  />
                </Panel>
                {/* <Panel header="Categories">
                  <RefinementList
                    attribute="category.name"
                    searchablePlaceholder="Search Categories"
                    showMore={true}
                  />
                </Panel> */}
                <Panel header="Sections">
                  <RefinementList
                    attribute="hierarchy.lvl1"
                    searchablePlaceholder="Search Sections"
                    showMore={true}
                  />
                </Panel>
              </DynamicWidgets>
            </div>
            <div className="Search">
              <SearchBox placeholder="Search" autoFocus />
              <div className="Search-header">
                <Pagination />
                <HitsPerPage
                  items={[
                    {label: '7 hits per page', value: 7, default: true},
                    {label: '25 hits per page', value: 25},
                    {label: '50 hits per page', value: 50},
                    {label: '100 hits per page', value: 100},
                  ]}
                />

                <Refresh />
              </div>

              <div className="CurrentRefinements">
                <ClearRefinements />
                <CurrentRefinements
                  transformItems={(items) =>
                    items.map((item) => {
                      const label = item.label
                        .toLowerCase()
                        .startsWith('hierarchy.lvl')
                        ? 'Hierarchy'
                        : item.label;

                      return {
                        ...item,
                        attribute: label,
                      };
                    })
                  }
                />
              </div>

              <Index indexName={indexName}>
                <Hits hitComponent={DocHit} />
              </Index>
              {/* <Index indexName={'discourse-posts'}>
                <Hits hitComponent={ForumHit} />
              </Index> */}

              <Pagination />
            </div>
          </div>
        </InstantSearch>
      </main>
    </Layout>
  );
}
