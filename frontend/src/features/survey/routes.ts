const surveyRoutes = [
  {
    name: 'survey',
    path: '/experiments/:experimentId/surveys/:surveyId',
    component: () =>
      import(/* webpackChunkName: "survey" */ '@/features/survey/main.vue'),
    meta: {
      title: 'Survey | MIA Experiments',
      layout: 'DefaultLayout',
      isPublic: true
    }
  }
];

export default surveyRoutes;