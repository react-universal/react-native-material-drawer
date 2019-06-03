(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{351:function(module,exports,__webpack_require__){__webpack_require__(352),__webpack_require__(438),module.exports=__webpack_require__(439)},439:function(module,exports,__webpack_require__){(function(module){var _react=__webpack_require__(229),iconFontStyles="@font-face {\n  src: url("+__webpack_require__(546)+"); \n  font-family: MaterialIcons;\n}";(0,_react.addParameters)({options:{showPanel:!0,panelPosition:"bottom",isToolshown:!0,name:"React Native Material Drawers"},viewport:{}}),(0,_react.configure)(function loadStories(){__webpack_require__(547)},module);var style=document.createElement("style");style.type="text/css",style.styleSheet?style.styleSheet.cssText=iconFontStyles:style.appendChild(document.createTextNode(iconFontStyles)),document.head.appendChild(style)}).call(this,__webpack_require__(49)(module))},547:function(module,exports,__webpack_require__){__webpack_require__(19);var _interopRequireDefault=__webpack_require__(0);Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"Drawer",{enumerable:!0,get:function(){return _DrawerStories.default}});var _DrawerStories=_interopRequireDefault(__webpack_require__(548))},548:function(module,exports,__webpack_require__){(function(module){__webpack_require__(19);var _interopRequireDefault=__webpack_require__(0);Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=exports.__ADDS_MAP__=exports.__STORY__=exports.withStorySource=void 0;var _react=_interopRequireDefault(__webpack_require__(1)),_reactNative=__webpack_require__(3),_materialBread=__webpack_require__(12),_Container=_interopRequireDefault(__webpack_require__(998)),_storiesOf=__webpack_require__(999),_storybookState=__webpack_require__(1e3),withStorySource=__webpack_require__(1005).withStorySource;exports.withStorySource=withStorySource;exports.__STORY__="import React from 'react';\nimport { View, StyleSheet, Platform, Dimensions, ScrollView } from 'react-native';\n\nimport { Drawer, DrawerItem, DrawerHeader, DrawerSection, IconButton, BodyText, Heading, Appbar } from 'material-bread';\nimport Container from '../storybook/components/Container';\nimport { storiesOf } from '../storybook/helpers/storiesOf';\n\nimport { State, Store } from '@sambego/storybook-state';\n\nconst store = new Store({\n  isOpen: false,\n  isOpenPermanent: true,\n});\n\nconst DrawerContent = () => {\n  return (\n    <View>\n      <DrawerHeader title={'Jon Snow'} subtitle={'Knows nothing'} />\n      <DrawerSection bottomDivider>\n        <DrawerItem text={'Inbox'} icon={'mail'} active />\n        <DrawerItem text={'Outbox'} icon={'send'} />\n        <DrawerItem text={'Favorites'} icon={'favorite'} />\n      </DrawerSection>\n    </View>\n  );\n};\n\nconst PageContent = () => {\n  return (\n    <View style={{ marginTop: 20, alignItems: 'center' }}>\n      <Heading type={4} style={{ marginBottom: 20 }}>\n        This is a page\n      </Heading>\n      <BodyText text=\"Click the menu button to open the drawer\" />\n      <BodyText text=\"Click outside the drawer to close it\" />\n    </View>\n  );\n};\n\nconst AppbarContent = isOpen => {\n  return (\n    <Appbar\n      barType={'normal'}\n      title={'Page Title'}\n      navigation={'menu'}\n      onNavigation={() => store.set({ isOpen: !isOpen.isOpen })}\n      actionItems={[{ name: 'search' }, { name: 'more-vert' }]}\n    />\n  );\n};\n\nconst pageWidth = Platform.OS == 'web' ? 600 : Dimensions.get('window').width;\n\nexport default storiesOf('Drawer', module)\n  .addParameters({ jest: ['Drawer'] })\n  .add('Simple', () => (\n    <Container scroll style={{ padding: 0 }}>\n      <State store={store} style={{ flex: 1 }}>\n        {state => (\n          <View style={styles.container}>\n            <Drawer\n              open={state.isOpen}\n              pageWidth={pageWidth}\n              pageHeight={500}\n              drawerContent={<DrawerContent />}\n              onClose={() => store.set({ isOpen: false })}\n              animationTime={250}\n              opacity={0.33}\n            >\n              <View style={styles.body}>\n                <IconButton size={24} name=\"menu\" onPress={() => store.set({ isOpen: !state.isOpen })} />\n                <PageContent />\n              </View>\n            </Drawer>\n          </View>\n        )}\n      </State>\n    </Container>\n  ))\n  .add('Over Appbar', () => (\n    <Container scroll style={{ padding: 0 }}>\n      <State store={store} style={{ flex: 1 }}>\n        {state => (\n          <View style={styles.container}>\n            <Drawer\n              open={state.isOpen}\n              pageWidth={pageWidth}\n              pageHeight={500}\n              drawerContent={<DrawerContent />}\n              onClose={() => store.set({ isOpen: false })}\n              animationTime={250}\n            >\n              <View style={styles.body}>\n                <AppbarContent isOpen={state.isOpen} />\n                <PageContent />\n              </View>\n            </Drawer>\n          </View>\n        )}\n      </State>\n    </Container>\n  ))\n  .add('Under Appbar', () => (\n    <Container scroll style={{ padding: 0 }}>\n      <State store={store} style={{ flex: 1 }}>\n        {state => (\n          <View style={styles.container}>\n            <Drawer\n              open={state.isOpen}\n              pageWidth={pageWidth}\n              pageHeight={500}\n              drawerContent={<DrawerContent />}\n              onClose={() => store.set({ isOpen: false })}\n              appbar={<AppbarContent isOpen={state.isOpen} />}\n            >\n              <View style={styles.body}>\n                <PageContent />\n              </View>\n            </Drawer>\n          </View>\n        )}\n      </State>\n    </Container>\n  ))\n  .add('No Scrim', () => (\n    <Container scroll style={{ padding: 0 }}>\n      <State store={store} style={{ flex: 1 }}>\n        {state => (\n          <View style={styles.container}>\n            <Drawer\n              open={state.isOpen}\n              pageWidth={pageWidth}\n              pageHeight={500}\n              drawerContent={<DrawerContent />}\n              onClose={() => store.set({ isOpen: false })}\n              scrim={false}\n            >\n              <View style={styles.body}>\n                <AppbarContent isOpen={state.isOpen} />\n                <PageContent />\n              </View>\n            </Drawer>\n          </View>\n        )}\n      </State>\n    </Container>\n  ))\n  .add('Custom Scrim', () => (\n    <Container scroll style={{ padding: 0 }}>\n      <State store={store} style={{ flex: 1 }}>\n        {state => (\n          <View style={styles.container}>\n            <Drawer\n              open={state.isOpen}\n              pageWidth={pageWidth}\n              pageHeight={500}\n              drawerContent={<DrawerContent />}\n              onClose={() => store.set({ isOpen: false })}\n              scrimColor={'#E91E63'}\n              scrimOpacity={0.2}\n            >\n              <View style={styles.body}>\n                <AppbarContent isOpen={state.isOpen} />\n                <PageContent />\n              </View>\n            </Drawer>\n          </View>\n        )}\n      </State>\n    </Container>\n  ))\n  .add('Scroll inner', () => (\n    <Container scroll style={{ padding: 0 }}>\n      <State store={store} style={{ flex: 1 }}>\n        {state => (\n          <View style={styles.container}>\n            <Drawer\n              open={state.isOpen}\n              pageWidth={pageWidth}\n              pageHeight={500}\n              drawerContent={\n                <ScrollView>\n                  <DrawerHeader title={'Jon Snow'} subtitle={'Knows nothing'} />\n                  <DrawerSection bottomDivider>\n                    <DrawerItem text={'Inbox'} icon={'mail'} active />\n                    <DrawerItem text={'Outbox'} icon={'send'} />\n                    <DrawerItem text={'Favorites'} icon={'favorite'} />\n                  </DrawerSection>\n                  <DrawerSection bottomDivider>\n                    <DrawerItem text={'Inbox'} icon={'mail'} />\n                    <DrawerItem text={'Outbox'} icon={'send'} />\n                    <DrawerItem text={'Favorites'} icon={'favorite'} />\n                  </DrawerSection>\n                  <DrawerSection bottomDivider>\n                    <DrawerItem text={'Inbox'} icon={'mail'} />\n                    <DrawerItem text={'Outbox'} icon={'send'} />\n                    <DrawerItem text={'Favorites'} icon={'favorite'} />\n                  </DrawerSection>\n                  <DrawerSection bottomDivider>\n                    <DrawerItem text={'Inbox'} icon={'mail'} />\n                    <DrawerItem text={'Outbox'} icon={'send'} />\n                    <DrawerItem text={'Favorites'} icon={'favorite'} />\n                  </DrawerSection>\n                  <DrawerSection bottomDivider>\n                    <DrawerItem text={'Inbox'} icon={'mail'} />\n                    <DrawerItem text={'Outbox'} icon={'send'} />\n                    <DrawerItem text={'Favorites'} icon={'favorite'} />\n                  </DrawerSection>\n                </ScrollView>\n              }\n              onClose={() => store.set({ isOpen: false })}\n              scrimColor={'#E91E63'}\n              scrimOpacity={0.2}\n            >\n              <View style={styles.body}>\n                <AppbarContent isOpen={state.isOpen} />\n                <PageContent />\n              </View>\n            </Drawer>\n          </View>\n        )}\n      </State>\n    </Container>\n  ))\n  .add('Push', () => (\n    <Container scroll style={{ padding: 0 }}>\n      <State store={store} style={{ flex: 1 }}>\n        {state => (\n          <View style={styles.container}>\n            <Drawer\n              open={state.isOpen}\n              pageWidth={pageWidth}\n              pageHeight={500}\n              drawerContent={<DrawerContent />}\n              onClose={() => store.set({ isOpen: false })}\n              type={'push'}\n            >\n              <View style={styles.body}>\n                <AppbarContent isOpen={state.isOpen} />\n                <PageContent />\n              </View>\n            </Drawer>\n          </View>\n        )}\n      </State>\n    </Container>\n  ))\n  .add('Push Under', () => (\n    <Container scroll style={{ padding: 0 }}>\n      <State store={store} style={{ flex: 1 }}>\n        {state => (\n          <View style={styles.container}>\n            <Drawer\n              open={state.isOpen}\n              pageWidth={pageWidth}\n              pageHeight={500}\n              drawerContent={<DrawerContent />}\n              onClose={() => store.set({ isOpen: false })}\n              type={'push'}\n              appbar={<AppbarContent isOpen={state.isOpen} />}\n            >\n              <View style={styles.body}>\n                <PageContent />\n              </View>\n            </Drawer>\n          </View>\n        )}\n      </State>\n    </Container>\n  ))\n  .add('Permanent', () => (\n    <Container scroll style={{ padding: 0 }}>\n      <State store={store} style={{ flex: 1 }}>\n        {state => (\n          <View style={[styles.container, { width: 'auto' }]}>\n            <Drawer\n              open={state.isOpenPermanent}\n              pageWidth={Platform.OS == 'web' ? 1000 : Dimensions.get('window').width}\n              pageHeight={500}\n              drawerContent={<DrawerContent />}\n              onClose={() => store.set({ isOpen: false })}\n              type={'permanent'}\n            >\n              <View\n                style={{\n                  width: '100%',\n                }}\n              >\n                <Appbar\n                  barType={'normal'}\n                  title={'Page Title'}\n                  navigation={'menu'}\n                  onNavigation={() => store.set({ isOpenPermanent: !state.isOpenPermanent })}\n                  actionItems={[{ name: 'search' }, { name: 'more-vert' }]}\n                />\n                <View style={styles.body}>\n                  <PageContent />\n                </View>\n              </View>\n            </Drawer>\n          </View>\n        )}\n      </State>\n    </Container>\n  ))\n  .add('Permanent Under', () => (\n    <Container scroll style={{ padding: 0 }}>\n      <State store={store} style={{ flex: 1 }}>\n        {state => (\n          <View style={[styles.container, { width: 'auto' }]}>\n            <Drawer\n              open={state.isOpenPermanent}\n              pageWidth={Platform.OS == 'web' ? 1000 : Dimensions.get('window').width}\n              pageHeight={500}\n              drawerContent={<DrawerContent />}\n              onClose={() => store.set({ isOpen: false })}\n              type={'permanent'}\n              appbar={\n                <Appbar\n                  barType={'normal'}\n                  title={'Page Title'}\n                  navigation={'menu'}\n                  onNavigation={() => store.set({ isOpenPermanent: !state.isOpenPermanent })}\n                  actionItems={[{ name: 'search' }, { name: 'more-vert' }]}\n                />\n              }\n            >\n              <View\n                style={{\n                  width: '100%',\n                }}\n              >\n                <View style={styles.body}>\n                  <PageContent />\n                </View>\n              </View>\n            </Drawer>\n          </View>\n        )}\n      </State>\n    </Container>\n  ));\n\nconst styles = StyleSheet.create({\n  container: {\n    zIndex: 1,\n    position: 'relative',\n  },\n  body: {\n    width: pageWidth,\n    height: 500,\n  },\n});\n";var __ADDS_MAP__={"drawer--permanent-under":{startLoc:{col:7,line:306},endLoc:{col:3,line:342}},"drawer--permanent":{startLoc:{col:7,line:271},endLoc:{col:3,line:305}},"drawer--push-under":{startLoc:{col:7,line:248},endLoc:{col:3,line:270}},"drawer--push":{startLoc:{col:7,line:225},endLoc:{col:3,line:247}},"drawer--scroll-inner":{startLoc:{col:7,line:172},endLoc:{col:3,line:224}},"drawer--custom-scrim":{startLoc:{col:7,line:148},endLoc:{col:3,line:171}},"drawer--no-scrim":{startLoc:{col:7,line:125},endLoc:{col:3,line:147}},"drawer--under-appbar":{startLoc:{col:7,line:103},endLoc:{col:3,line:124}},"drawer--over-appbar":{startLoc:{col:7,line:80},endLoc:{col:3,line:102}},"drawer--simple":{startLoc:{col:7,line:56},endLoc:{col:3,line:79}}};exports.__ADDS_MAP__=__ADDS_MAP__;var store=new _storybookState.Store({isOpen:!1,isOpenPermanent:!0}),DrawerContent=function(){return _react.default.createElement(_reactNative.View,null,_react.default.createElement(_materialBread.DrawerHeader,{title:"Jon Snow",subtitle:"Knows nothing"}),_react.default.createElement(_materialBread.DrawerSection,{bottomDivider:!0},_react.default.createElement(_materialBread.DrawerItem,{text:"Inbox",icon:"mail",active:!0}),_react.default.createElement(_materialBread.DrawerItem,{text:"Outbox",icon:"send"}),_react.default.createElement(_materialBread.DrawerItem,{text:"Favorites",icon:"favorite"})))},PageContent=function(){return _react.default.createElement(_reactNative.View,{style:{marginTop:20,alignItems:"center"}},_react.default.createElement(_materialBread.Heading,{type:4,style:{marginBottom:20}},"This is a page"),_react.default.createElement(_materialBread.BodyText,{text:"Click the menu button to open the drawer"}),_react.default.createElement(_materialBread.BodyText,{text:"Click outside the drawer to close it"}))},AppbarContent=function(isOpen){return _react.default.createElement(_materialBread.Appbar,{barType:"normal",title:"Page Title",navigation:"menu",onNavigation:function(){return store.set({isOpen:!isOpen.isOpen})},actionItems:[{name:"search"},{name:"more-vert"}]})},pageWidth="web"==_reactNative.Platform.OS?600:_reactNative.Dimensions.get("window").width,_default=(0,_storiesOf.storiesOf)("Drawer",module).addDecorator(withStorySource("import React from 'react';\nimport { View, StyleSheet, Platform, Dimensions, ScrollView } from 'react-native';\n\nimport { Drawer, DrawerItem, DrawerHeader, DrawerSection, IconButton, BodyText, Heading, Appbar } from 'material-bread';\nimport Container from '../storybook/components/Container';\nimport { storiesOf } from '../storybook/helpers/storiesOf';\n\nimport { State, Store } from '@sambego/storybook-state';\n\nconst store = new Store({\n  isOpen: false,\n  isOpenPermanent: true,\n});\n\nconst DrawerContent = () => {\n  return (\n    <View>\n      <DrawerHeader title={'Jon Snow'} subtitle={'Knows nothing'} />\n      <DrawerSection bottomDivider>\n        <DrawerItem text={'Inbox'} icon={'mail'} active />\n        <DrawerItem text={'Outbox'} icon={'send'} />\n        <DrawerItem text={'Favorites'} icon={'favorite'} />\n      </DrawerSection>\n    </View>\n  );\n};\n\nconst PageContent = () => {\n  return (\n    <View style={{ marginTop: 20, alignItems: 'center' }}>\n      <Heading type={4} style={{ marginBottom: 20 }}>\n        This is a page\n      </Heading>\n      <BodyText text=\"Click the menu button to open the drawer\" />\n      <BodyText text=\"Click outside the drawer to close it\" />\n    </View>\n  );\n};\n\nconst AppbarContent = isOpen => {\n  return (\n    <Appbar\n      barType={'normal'}\n      title={'Page Title'}\n      navigation={'menu'}\n      onNavigation={() => store.set({ isOpen: !isOpen.isOpen })}\n      actionItems={[{ name: 'search' }, { name: 'more-vert' }]}\n    />\n  );\n};\n\nconst pageWidth = Platform.OS == 'web' ? 600 : Dimensions.get('window').width;\n\nexport default storiesOf('Drawer', module)\n  .addParameters({ jest: ['Drawer'] })\n  .add('Simple', () => (\n    <Container scroll style={{ padding: 0 }}>\n      <State store={store} style={{ flex: 1 }}>\n        {state => (\n          <View style={styles.container}>\n            <Drawer\n              open={state.isOpen}\n              pageWidth={pageWidth}\n              pageHeight={500}\n              drawerContent={<DrawerContent />}\n              onClose={() => store.set({ isOpen: false })}\n              animationTime={250}\n              opacity={0.33}\n            >\n              <View style={styles.body}>\n                <IconButton size={24} name=\"menu\" onPress={() => store.set({ isOpen: !state.isOpen })} />\n                <PageContent />\n              </View>\n            </Drawer>\n          </View>\n        )}\n      </State>\n    </Container>\n  ))\n  .add('Over Appbar', () => (\n    <Container scroll style={{ padding: 0 }}>\n      <State store={store} style={{ flex: 1 }}>\n        {state => (\n          <View style={styles.container}>\n            <Drawer\n              open={state.isOpen}\n              pageWidth={pageWidth}\n              pageHeight={500}\n              drawerContent={<DrawerContent />}\n              onClose={() => store.set({ isOpen: false })}\n              animationTime={250}\n            >\n              <View style={styles.body}>\n                <AppbarContent isOpen={state.isOpen} />\n                <PageContent />\n              </View>\n            </Drawer>\n          </View>\n        )}\n      </State>\n    </Container>\n  ))\n  .add('Under Appbar', () => (\n    <Container scroll style={{ padding: 0 }}>\n      <State store={store} style={{ flex: 1 }}>\n        {state => (\n          <View style={styles.container}>\n            <Drawer\n              open={state.isOpen}\n              pageWidth={pageWidth}\n              pageHeight={500}\n              drawerContent={<DrawerContent />}\n              onClose={() => store.set({ isOpen: false })}\n              appbar={<AppbarContent isOpen={state.isOpen} />}\n            >\n              <View style={styles.body}>\n                <PageContent />\n              </View>\n            </Drawer>\n          </View>\n        )}\n      </State>\n    </Container>\n  ))\n  .add('No Scrim', () => (\n    <Container scroll style={{ padding: 0 }}>\n      <State store={store} style={{ flex: 1 }}>\n        {state => (\n          <View style={styles.container}>\n            <Drawer\n              open={state.isOpen}\n              pageWidth={pageWidth}\n              pageHeight={500}\n              drawerContent={<DrawerContent />}\n              onClose={() => store.set({ isOpen: false })}\n              scrim={false}\n            >\n              <View style={styles.body}>\n                <AppbarContent isOpen={state.isOpen} />\n                <PageContent />\n              </View>\n            </Drawer>\n          </View>\n        )}\n      </State>\n    </Container>\n  ))\n  .add('Custom Scrim', () => (\n    <Container scroll style={{ padding: 0 }}>\n      <State store={store} style={{ flex: 1 }}>\n        {state => (\n          <View style={styles.container}>\n            <Drawer\n              open={state.isOpen}\n              pageWidth={pageWidth}\n              pageHeight={500}\n              drawerContent={<DrawerContent />}\n              onClose={() => store.set({ isOpen: false })}\n              scrimColor={'#E91E63'}\n              scrimOpacity={0.2}\n            >\n              <View style={styles.body}>\n                <AppbarContent isOpen={state.isOpen} />\n                <PageContent />\n              </View>\n            </Drawer>\n          </View>\n        )}\n      </State>\n    </Container>\n  ))\n  .add('Scroll inner', () => (\n    <Container scroll style={{ padding: 0 }}>\n      <State store={store} style={{ flex: 1 }}>\n        {state => (\n          <View style={styles.container}>\n            <Drawer\n              open={state.isOpen}\n              pageWidth={pageWidth}\n              pageHeight={500}\n              drawerContent={\n                <ScrollView>\n                  <DrawerHeader title={'Jon Snow'} subtitle={'Knows nothing'} />\n                  <DrawerSection bottomDivider>\n                    <DrawerItem text={'Inbox'} icon={'mail'} active />\n                    <DrawerItem text={'Outbox'} icon={'send'} />\n                    <DrawerItem text={'Favorites'} icon={'favorite'} />\n                  </DrawerSection>\n                  <DrawerSection bottomDivider>\n                    <DrawerItem text={'Inbox'} icon={'mail'} />\n                    <DrawerItem text={'Outbox'} icon={'send'} />\n                    <DrawerItem text={'Favorites'} icon={'favorite'} />\n                  </DrawerSection>\n                  <DrawerSection bottomDivider>\n                    <DrawerItem text={'Inbox'} icon={'mail'} />\n                    <DrawerItem text={'Outbox'} icon={'send'} />\n                    <DrawerItem text={'Favorites'} icon={'favorite'} />\n                  </DrawerSection>\n                  <DrawerSection bottomDivider>\n                    <DrawerItem text={'Inbox'} icon={'mail'} />\n                    <DrawerItem text={'Outbox'} icon={'send'} />\n                    <DrawerItem text={'Favorites'} icon={'favorite'} />\n                  </DrawerSection>\n                  <DrawerSection bottomDivider>\n                    <DrawerItem text={'Inbox'} icon={'mail'} />\n                    <DrawerItem text={'Outbox'} icon={'send'} />\n                    <DrawerItem text={'Favorites'} icon={'favorite'} />\n                  </DrawerSection>\n                </ScrollView>\n              }\n              onClose={() => store.set({ isOpen: false })}\n              scrimColor={'#E91E63'}\n              scrimOpacity={0.2}\n            >\n              <View style={styles.body}>\n                <AppbarContent isOpen={state.isOpen} />\n                <PageContent />\n              </View>\n            </Drawer>\n          </View>\n        )}\n      </State>\n    </Container>\n  ))\n  .add('Push', () => (\n    <Container scroll style={{ padding: 0 }}>\n      <State store={store} style={{ flex: 1 }}>\n        {state => (\n          <View style={styles.container}>\n            <Drawer\n              open={state.isOpen}\n              pageWidth={pageWidth}\n              pageHeight={500}\n              drawerContent={<DrawerContent />}\n              onClose={() => store.set({ isOpen: false })}\n              type={'push'}\n            >\n              <View style={styles.body}>\n                <AppbarContent isOpen={state.isOpen} />\n                <PageContent />\n              </View>\n            </Drawer>\n          </View>\n        )}\n      </State>\n    </Container>\n  ))\n  .add('Push Under', () => (\n    <Container scroll style={{ padding: 0 }}>\n      <State store={store} style={{ flex: 1 }}>\n        {state => (\n          <View style={styles.container}>\n            <Drawer\n              open={state.isOpen}\n              pageWidth={pageWidth}\n              pageHeight={500}\n              drawerContent={<DrawerContent />}\n              onClose={() => store.set({ isOpen: false })}\n              type={'push'}\n              appbar={<AppbarContent isOpen={state.isOpen} />}\n            >\n              <View style={styles.body}>\n                <PageContent />\n              </View>\n            </Drawer>\n          </View>\n        )}\n      </State>\n    </Container>\n  ))\n  .add('Permanent', () => (\n    <Container scroll style={{ padding: 0 }}>\n      <State store={store} style={{ flex: 1 }}>\n        {state => (\n          <View style={[styles.container, { width: 'auto' }]}>\n            <Drawer\n              open={state.isOpenPermanent}\n              pageWidth={Platform.OS == 'web' ? 1000 : Dimensions.get('window').width}\n              pageHeight={500}\n              drawerContent={<DrawerContent />}\n              onClose={() => store.set({ isOpen: false })}\n              type={'permanent'}\n            >\n              <View\n                style={{\n                  width: '100%',\n                }}\n              >\n                <Appbar\n                  barType={'normal'}\n                  title={'Page Title'}\n                  navigation={'menu'}\n                  onNavigation={() => store.set({ isOpenPermanent: !state.isOpenPermanent })}\n                  actionItems={[{ name: 'search' }, { name: 'more-vert' }]}\n                />\n                <View style={styles.body}>\n                  <PageContent />\n                </View>\n              </View>\n            </Drawer>\n          </View>\n        )}\n      </State>\n    </Container>\n  ))\n  .add('Permanent Under', () => (\n    <Container scroll style={{ padding: 0 }}>\n      <State store={store} style={{ flex: 1 }}>\n        {state => (\n          <View style={[styles.container, { width: 'auto' }]}>\n            <Drawer\n              open={state.isOpenPermanent}\n              pageWidth={Platform.OS == 'web' ? 1000 : Dimensions.get('window').width}\n              pageHeight={500}\n              drawerContent={<DrawerContent />}\n              onClose={() => store.set({ isOpen: false })}\n              type={'permanent'}\n              appbar={\n                <Appbar\n                  barType={'normal'}\n                  title={'Page Title'}\n                  navigation={'menu'}\n                  onNavigation={() => store.set({ isOpenPermanent: !state.isOpenPermanent })}\n                  actionItems={[{ name: 'search' }, { name: 'more-vert' }]}\n                />\n              }\n            >\n              <View\n                style={{\n                  width: '100%',\n                }}\n              >\n                <View style={styles.body}>\n                  <PageContent />\n                </View>\n              </View>\n            </Drawer>\n          </View>\n        )}\n      </State>\n    </Container>\n  ));\n\nconst styles = StyleSheet.create({\n  container: {\n    zIndex: 1,\n    position: 'relative',\n  },\n  body: {\n    width: pageWidth,\n    height: 500,\n  },\n});\n",__ADDS_MAP__)).addParameters({jest:["Drawer"]}).add("Simple",function(){return _react.default.createElement(_Container.default,{scroll:!0,style:{padding:0}},_react.default.createElement(_storybookState.State,{store:store,style:{flex:1}},function(state){return _react.default.createElement(_reactNative.View,{style:styles.container},_react.default.createElement(_materialBread.Drawer,{open:state.isOpen,pageWidth:pageWidth,pageHeight:500,drawerContent:_react.default.createElement(DrawerContent,null),onClose:function(){return store.set({isOpen:!1})},animationTime:250,opacity:.33},_react.default.createElement(_reactNative.View,{style:styles.body},_react.default.createElement(_materialBread.IconButton,{size:24,name:"menu",onPress:function(){return store.set({isOpen:!state.isOpen})}}),_react.default.createElement(PageContent,null))))}))}).add("Over Appbar",function(){return _react.default.createElement(_Container.default,{scroll:!0,style:{padding:0}},_react.default.createElement(_storybookState.State,{store:store,style:{flex:1}},function(state){return _react.default.createElement(_reactNative.View,{style:styles.container},_react.default.createElement(_materialBread.Drawer,{open:state.isOpen,pageWidth:pageWidth,pageHeight:500,drawerContent:_react.default.createElement(DrawerContent,null),onClose:function(){return store.set({isOpen:!1})},animationTime:250},_react.default.createElement(_reactNative.View,{style:styles.body},_react.default.createElement(AppbarContent,{isOpen:state.isOpen}),_react.default.createElement(PageContent,null))))}))}).add("Under Appbar",function(){return _react.default.createElement(_Container.default,{scroll:!0,style:{padding:0}},_react.default.createElement(_storybookState.State,{store:store,style:{flex:1}},function(state){return _react.default.createElement(_reactNative.View,{style:styles.container},_react.default.createElement(_materialBread.Drawer,{open:state.isOpen,pageWidth:pageWidth,pageHeight:500,drawerContent:_react.default.createElement(DrawerContent,null),onClose:function(){return store.set({isOpen:!1})},appbar:_react.default.createElement(AppbarContent,{isOpen:state.isOpen})},_react.default.createElement(_reactNative.View,{style:styles.body},_react.default.createElement(PageContent,null))))}))}).add("No Scrim",function(){return _react.default.createElement(_Container.default,{scroll:!0,style:{padding:0}},_react.default.createElement(_storybookState.State,{store:store,style:{flex:1}},function(state){return _react.default.createElement(_reactNative.View,{style:styles.container},_react.default.createElement(_materialBread.Drawer,{open:state.isOpen,pageWidth:pageWidth,pageHeight:500,drawerContent:_react.default.createElement(DrawerContent,null),onClose:function(){return store.set({isOpen:!1})},scrim:!1},_react.default.createElement(_reactNative.View,{style:styles.body},_react.default.createElement(AppbarContent,{isOpen:state.isOpen}),_react.default.createElement(PageContent,null))))}))}).add("Custom Scrim",function(){return _react.default.createElement(_Container.default,{scroll:!0,style:{padding:0}},_react.default.createElement(_storybookState.State,{store:store,style:{flex:1}},function(state){return _react.default.createElement(_reactNative.View,{style:styles.container},_react.default.createElement(_materialBread.Drawer,{open:state.isOpen,pageWidth:pageWidth,pageHeight:500,drawerContent:_react.default.createElement(DrawerContent,null),onClose:function(){return store.set({isOpen:!1})},scrimColor:"#E91E63",scrimOpacity:.2},_react.default.createElement(_reactNative.View,{style:styles.body},_react.default.createElement(AppbarContent,{isOpen:state.isOpen}),_react.default.createElement(PageContent,null))))}))}).add("Scroll inner",function(){return _react.default.createElement(_Container.default,{scroll:!0,style:{padding:0}},_react.default.createElement(_storybookState.State,{store:store,style:{flex:1}},function(state){return _react.default.createElement(_reactNative.View,{style:styles.container},_react.default.createElement(_materialBread.Drawer,{open:state.isOpen,pageWidth:pageWidth,pageHeight:500,drawerContent:_react.default.createElement(_reactNative.ScrollView,null,_react.default.createElement(_materialBread.DrawerHeader,{title:"Jon Snow",subtitle:"Knows nothing"}),_react.default.createElement(_materialBread.DrawerSection,{bottomDivider:!0},_react.default.createElement(_materialBread.DrawerItem,{text:"Inbox",icon:"mail",active:!0}),_react.default.createElement(_materialBread.DrawerItem,{text:"Outbox",icon:"send"}),_react.default.createElement(_materialBread.DrawerItem,{text:"Favorites",icon:"favorite"})),_react.default.createElement(_materialBread.DrawerSection,{bottomDivider:!0},_react.default.createElement(_materialBread.DrawerItem,{text:"Inbox",icon:"mail"}),_react.default.createElement(_materialBread.DrawerItem,{text:"Outbox",icon:"send"}),_react.default.createElement(_materialBread.DrawerItem,{text:"Favorites",icon:"favorite"})),_react.default.createElement(_materialBread.DrawerSection,{bottomDivider:!0},_react.default.createElement(_materialBread.DrawerItem,{text:"Inbox",icon:"mail"}),_react.default.createElement(_materialBread.DrawerItem,{text:"Outbox",icon:"send"}),_react.default.createElement(_materialBread.DrawerItem,{text:"Favorites",icon:"favorite"})),_react.default.createElement(_materialBread.DrawerSection,{bottomDivider:!0},_react.default.createElement(_materialBread.DrawerItem,{text:"Inbox",icon:"mail"}),_react.default.createElement(_materialBread.DrawerItem,{text:"Outbox",icon:"send"}),_react.default.createElement(_materialBread.DrawerItem,{text:"Favorites",icon:"favorite"})),_react.default.createElement(_materialBread.DrawerSection,{bottomDivider:!0},_react.default.createElement(_materialBread.DrawerItem,{text:"Inbox",icon:"mail"}),_react.default.createElement(_materialBread.DrawerItem,{text:"Outbox",icon:"send"}),_react.default.createElement(_materialBread.DrawerItem,{text:"Favorites",icon:"favorite"}))),onClose:function(){return store.set({isOpen:!1})},scrimColor:"#E91E63",scrimOpacity:.2},_react.default.createElement(_reactNative.View,{style:styles.body},_react.default.createElement(AppbarContent,{isOpen:state.isOpen}),_react.default.createElement(PageContent,null))))}))}).add("Push",function(){return _react.default.createElement(_Container.default,{scroll:!0,style:{padding:0}},_react.default.createElement(_storybookState.State,{store:store,style:{flex:1}},function(state){return _react.default.createElement(_reactNative.View,{style:styles.container},_react.default.createElement(_materialBread.Drawer,{open:state.isOpen,pageWidth:pageWidth,pageHeight:500,drawerContent:_react.default.createElement(DrawerContent,null),onClose:function(){return store.set({isOpen:!1})},type:"push"},_react.default.createElement(_reactNative.View,{style:styles.body},_react.default.createElement(AppbarContent,{isOpen:state.isOpen}),_react.default.createElement(PageContent,null))))}))}).add("Push Under",function(){return _react.default.createElement(_Container.default,{scroll:!0,style:{padding:0}},_react.default.createElement(_storybookState.State,{store:store,style:{flex:1}},function(state){return _react.default.createElement(_reactNative.View,{style:styles.container},_react.default.createElement(_materialBread.Drawer,{open:state.isOpen,pageWidth:pageWidth,pageHeight:500,drawerContent:_react.default.createElement(DrawerContent,null),onClose:function(){return store.set({isOpen:!1})},type:"push",appbar:_react.default.createElement(AppbarContent,{isOpen:state.isOpen})},_react.default.createElement(_reactNative.View,{style:styles.body},_react.default.createElement(PageContent,null))))}))}).add("Permanent",function(){return _react.default.createElement(_Container.default,{scroll:!0,style:{padding:0}},_react.default.createElement(_storybookState.State,{store:store,style:{flex:1}},function(state){return _react.default.createElement(_reactNative.View,{style:[styles.container,{width:"auto"}]},_react.default.createElement(_materialBread.Drawer,{open:state.isOpenPermanent,pageWidth:"web"==_reactNative.Platform.OS?1e3:_reactNative.Dimensions.get("window").width,pageHeight:500,drawerContent:_react.default.createElement(DrawerContent,null),onClose:function(){return store.set({isOpen:!1})},type:"permanent"},_react.default.createElement(_reactNative.View,{style:{width:"100%"}},_react.default.createElement(_materialBread.Appbar,{barType:"normal",title:"Page Title",navigation:"menu",onNavigation:function(){return store.set({isOpenPermanent:!state.isOpenPermanent})},actionItems:[{name:"search"},{name:"more-vert"}]}),_react.default.createElement(_reactNative.View,{style:styles.body},_react.default.createElement(PageContent,null)))))}))}).add("Permanent Under",function(){return _react.default.createElement(_Container.default,{scroll:!0,style:{padding:0}},_react.default.createElement(_storybookState.State,{store:store,style:{flex:1}},function(state){return _react.default.createElement(_reactNative.View,{style:[styles.container,{width:"auto"}]},_react.default.createElement(_materialBread.Drawer,{open:state.isOpenPermanent,pageWidth:"web"==_reactNative.Platform.OS?1e3:_reactNative.Dimensions.get("window").width,pageHeight:500,drawerContent:_react.default.createElement(DrawerContent,null),onClose:function(){return store.set({isOpen:!1})},type:"permanent",appbar:_react.default.createElement(_materialBread.Appbar,{barType:"normal",title:"Page Title",navigation:"menu",onNavigation:function(){return store.set({isOpenPermanent:!state.isOpenPermanent})},actionItems:[{name:"search"},{name:"more-vert"}]})},_react.default.createElement(_reactNative.View,{style:{width:"100%"}},_react.default.createElement(_reactNative.View,{style:styles.body},_react.default.createElement(PageContent,null)))))}))});exports.default=_default;var styles=_reactNative.StyleSheet.create({container:{zIndex:1,position:"relative"},body:{width:pageWidth,height:500}})}).call(this,__webpack_require__(49)(module))},998:function(module,exports,__webpack_require__){__webpack_require__(19);var _interopRequireWildcard=__webpack_require__(4),_interopRequireDefault=__webpack_require__(0);Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _classCallCheck2=_interopRequireDefault(__webpack_require__(5)),_createClass2=_interopRequireDefault(__webpack_require__(6)),_possibleConstructorReturn2=_interopRequireDefault(__webpack_require__(7)),_getPrototypeOf2=_interopRequireDefault(__webpack_require__(8)),_inherits2=_interopRequireDefault(__webpack_require__(9)),_react=_interopRequireWildcard(__webpack_require__(1)),_propTypes=_interopRequireDefault(__webpack_require__(2)),_reactNative=__webpack_require__(3),_materialBread=__webpack_require__(12),Container=function(_Component){function Container(){return(0,_classCallCheck2.default)(this,Container),(0,_possibleConstructorReturn2.default)(this,(0,_getPrototypeOf2.default)(Container).apply(this,arguments))}return(0,_inherits2.default)(Container,_Component),(0,_createClass2.default)(Container,[{key:"render",value:function(){var _this$props=this.props,style=_this$props.style,scroll=_this$props.scroll,children=_this$props.children;return scroll?_react.default.createElement(_reactNative.ScrollView,null,_react.default.createElement(_reactNative.View,{style:[styles.container,style]},_react.default.createElement(_materialBread.BreadProvider,{value:{}},children))):_react.default.createElement(_reactNative.View,{style:[styles.container,style]},_react.default.createElement(_materialBread.BreadProvider,{value:{}},children))}}]),Container}(_react.Component);exports.default=Container,Container.propTypes={style:_propTypes.default.object,children:_propTypes.default.node,scroll:_propTypes.default.bool};var styles=_reactNative.StyleSheet.create({container:{padding:16}})},999:function(module,exports,__webpack_require__){__webpack_require__(19),Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"storiesOf",{enumerable:!0,get:function(){return _react.storiesOf}});var _react=__webpack_require__(229)}},[[351,1,2]]]);
//# sourceMappingURL=main.2c13e051d4cbc651cfff.bundle.js.map