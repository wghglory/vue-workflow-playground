const data = {
  nodes: [
    {
      id: 'story-review',
      type: 'circle',
      x: 217,
      y: 221,
      properties: {},
      text: {
        x: 217,
        y: 221,
        value: 'Story Review',
      },
    },
    {
      id: 'pipeline-creation',
      type: 'done-rect',
      x: 377,
      y: 121,
      properties: {},
      text: {
        x: 377,
        y: 121,
        value: 'Pipeline\nCreation',
      },
    },
    {
      id: 'design-spec-review',
      type: 'done-rect',
      x: 377,
      y: 221,
      properties: {},
      text: {
        x: 377,
        y: 221,
        value: 'Design Spec\nReview',
      },
    },
    {
      id: 'test-plan-review',
      type: 'done-rect',
      x: 557,
      y: 301,
      properties: {},
      text: {
        x: 557,
        y: 301,
        value: 'Test Plan\nReview',
      },
    },
    {
      id: 'development-ut',
      type: 'done-rect',
      x: 557,
      y: 181,
      properties: {},
      text: {
        x: 557,
        y: 181,
        value: 'Development\n& UT',
      },
    },
    {
      id: 'merge-to-feature-branch',
      type: 'done-rect',
      x: 697,
      y: 181,
      properties: {},
      text: {
        x: 697,
        y: 181,
        value: 'Merge to\nFeature branch',
      },
    },
    {
      id: 'test-case-writing',
      type: 'done-rect',
      x: 697,
      y: 301,
      properties: {},
      text: {
        x: 697,
        y: 301,
        value: 'Test Case\nWriting',
      },
    },
    {
      id: 'deploy-to-feature-pipeline',
      type: 'done-rect',
      x: 837,
      y: 181,
      properties: {},
      text: {
        x: 837,
        y: 181,
        value: 'Deploy to\nFeature pipeline',
      },
    },
    {
      id: 'new-feature-test',
      type: 'done-rect',
      x: 837,
      y: 301,
      properties: {},
      text: {
        x: 837,
        y: 301,
        value: 'New Feature\nTest',
      },
    },
    {
      id: 'bug-report',
      type: 'done-rect',
      x: 977,
      y: 301,
      properties: {},
      text: {
        x: 977,
        y: 301,
        value: 'Bug Report',
      },
    },
    {
      id: 'regression-test-1',
      type: 'done-rect',
      x: 1117,
      y: 301,
      properties: {},
      text: {
        x: 1117,
        y: 301,
        value: 'Regression\nTest',
      },
    },
    {
      id: 'critical-bugs-1',
      type: 'diamond',
      x: 1257,
      y: 301,
      properties: {},
      text: {
        x: 1257,
        y: 301,
        value: 'Critical\nBugs?',
      },
      rx: 50,
      ry: 50,
    },
    {
      id: 'merge-to-common-branch',
      type: 'done-rect',
      x: 1257,
      y: 417,
      properties: {},
      text: {
        x: 1257,
        y: 417,
        value: 'Merge to\nCommon branch',
      },
    },
    {
      id: 'deploy-to-uat',
      type: 'done-rect',
      x: 1118,
      y: 417,
      properties: {},
      text: {
        x: 1118,
        y: 417,
        value: 'Deploy to \nUAT',
      },
    },
    {
      id: 'regression-test-2',
      type: 'done-rect',
      x: 979,
      y: 417,
      properties: {},
      text: {
        x: 979,
        y: 417,
        value: 'Regression\nTest',
      },
    },
    {
      id: 'demo',
      type: 'done-rect',
      x: 839,
      y: 417,
      properties: {},
      text: {
        x: 839,
        y: 417,
        value: 'Demo',
      },
    },
    {
      id: 'sup-test',
      type: 'current-rect',
      x: 237,
      y: 561,
      properties: {
        link: 'sup link',
        isActive: true,
      },
      text: {
        x: 237,
        y: 561,
        value: 'SUP\nTest',
      },
    },
    {
      id: 'g11n-test',
      type: 'current-rect',
      x: 237,
      y: 661,
      properties: {
        isActive: true,
      },
      text: {
        x: 237,
        y: 661,
        value: 'G11N/L10N\nTest',
      },
    },
    {
      id: 'ix-documentation',
      type: 'current-rect',
      x: 237,
      y: 761,
      properties: {
        isActive: true,
      },
      text: {
        x: 237,
        y: 761,
        value: 'IX\nDocumentation',
      },
    },
    {
      id: 'marketing',
      type: 'current-rect',
      x: 237,
      y: 861,
      properties: {
        isActive: true,
      },
      text: {
        x: 237,
        y: 861,
        value: 'Marketing',
      },
    },
    {
      id: 'pre-prod-verify',
      type: 'diamond',
      x: 696,
      y: 417,
      properties: {},
      text: {
        x: 696,
        y: 417,
        value: 'Pre-Prod\nVerify?',
      },
      rx: 50,
      ry: 50,
    },
    {
      id: 'critical-bug-2',
      type: 'diamond',
      x: 476,
      y: 641,
      properties: {},
      text: {
        x: 476,
        y: 641,
        value: 'Critical\nBugs?',
      },
      rx: 50,
      ry: 50,
    },
    {
      id: 'merge-to-master-branch',
      type: 'rect',
      x: 696,
      y: 641,
      properties: {},
      text: {
        x: 696,
        y: 641,
        value: 'Merge to\nMaster branch',
      },
    },
    {
      id: 'stg-upgrade',
      type: 'rect',
      x: 840,
      y: 641,
      properties: {},
      text: {
        x: 840,
        y: 641,
        value: 'STG\nUpgrade',
      },
    },
    {
      id: 'stg-sanity-test',
      type: 'rect',
      x: 978,
      y: 641,
      properties: {},
      text: {
        x: 978,
        y: 641,
        value: 'STG\nSanity Test',
      },
    },
    {
      id: 'prod-upgrade',
      type: 'rect',
      x: 1118,
      y: 641,
      properties: {},
      text: {
        x: 1118,
        y: 641,
        value: 'PROD\nUpgrade',
      },
    },
    {
      id: 'prod-sanity-test',
      type: 'rect',
      x: 1258,
      y: 641,
      properties: {},
      text: {
        x: 1258,
        y: 641,
        value: 'PROD\nSanity Test',
      },
    },
    {
      id: 'release',
      type: 'circle',
      x: 1259,
      y: 761,
      properties: {},
      text: {
        x: 1259,
        y: 761,
        value: 'Release',
      },
    },
    {
      id: 'bug-fix-1',
      type: 'done-rect',
      x: 697,
      y: 61,
      properties: {},
      text: {
        x: 697,
        y: 61,
        value: 'Bug Fix 1',
      },
    },
    {
      id: 'bug-fix-2',
      type: 'rect',
      x: 476,
      y: 506,
      properties: {},
      text: {
        x: 476,
        y: 506,
        value: 'Bug Fix 2',
      },
    },
  ],
  edges: [
    {
      id: 'fbe029b7-48af-4ea3-a917-56006742267c',
      type: 'polyline',
      sourceNodeId: 'story-review',
      targetNodeId: 'pipeline-creation',
      startPoint: {
        x: 217,
        y: 171,
      },
      endPoint: {
        x: 327,
        y: 121,
      },
      properties: {},
      pointsList: [
        {
          x: 217,
          y: 171,
        },
        {
          x: 217,
          y: 121,
        },
        {
          x: 327,
          y: 121,
        },
      ],
    },
    {
      id: '824524d6-3f6d-4f46-9741-cc2e154617b9',
      type: 'polyline',
      sourceNodeId: 'story-review',
      targetNodeId: 'design-spec-review',
      startPoint: {
        x: 267,
        y: 221,
      },
      endPoint: {
        x: 327,
        y: 221,
      },
      properties: {},
      pointsList: [
        {
          x: 267,
          y: 221,
        },
        {
          x: 327,
          y: 221,
        },
      ],
    },
    {
      id: 'd2ce6a45-8352-4e92-b8d3-562a653e5fb6',
      type: 'polyline',
      sourceNodeId: 'pipeline-creation',
      targetNodeId: 'development-ut',
      startPoint: {
        x: 427,
        y: 121,
      },
      endPoint: {
        x: 507,
        y: 181,
      },
      properties: {},
      pointsList: [
        {
          x: 427,
          y: 121,
        },
        {
          x: 467,
          y: 121,
        },
        {
          x: 467,
          y: 181,
        },
        {
          x: 507,
          y: 181,
        },
      ],
    },
    {
      id: 'f7d263a2-3c2e-4667-8604-c5f3f3038930',
      type: 'polyline',
      sourceNodeId: 'design-spec-review',
      targetNodeId: 'development-ut',
      startPoint: {
        x: 427,
        y: 223,
      },
      endPoint: {
        x: 507,
        y: 181,
      },
      properties: {},
      pointsList: [
        {
          x: 427,
          y: 223,
        },
        {
          x: 467,
          y: 223,
        },
        {
          x: 467,
          y: 181,
        },
        {
          x: 507,
          y: 181,
        },
      ],
    },
    {
      id: '38fcce08-b6f8-47bb-9d2a-0658e4d6765a',
      type: 'polyline',
      sourceNodeId: 'story-review',
      targetNodeId: 'test-plan-review',
      startPoint: {
        x: 217,
        y: 271,
      },
      endPoint: {
        x: 507,
        y: 301,
      },
      properties: {},
      pointsList: [
        {
          x: 217,
          y: 271,
        },
        {
          x: 217,
          y: 301,
        },
        {
          x: 507,
          y: 301,
        },
      ],
    },
    {
      id: 'f232b202-56bf-4e17-8d5b-4e20c36dc3fd',
      type: 'polyline',
      sourceNodeId: 'development-ut',
      targetNodeId: 'merge-to-feature-branch',
      startPoint: {
        x: 607,
        y: 181,
      },
      endPoint: {
        x: 647,
        y: 181,
      },
      properties: {},
      pointsList: [
        {
          x: 607,
          y: 181,
        },
        {
          x: 637,
          y: 181,
        },
        {
          x: 637,
          y: 181,
        },
        {
          x: 617,
          y: 181,
        },
        {
          x: 617,
          y: 181,
        },
        {
          x: 647,
          y: 181,
        },
      ],
    },
    {
      id: '791bf926-131e-4691-bbf8-9a0fb67e99e8',
      type: 'polyline',
      sourceNodeId: 'merge-to-feature-branch',
      targetNodeId: 'deploy-to-feature-pipeline',
      startPoint: {
        x: 747,
        y: 181,
      },
      endPoint: {
        x: 787,
        y: 181,
      },
      properties: {},
      pointsList: [
        {
          x: 747,
          y: 181,
        },
        {
          x: 777,
          y: 181,
        },
        {
          x: 777,
          y: 181,
        },
        {
          x: 757,
          y: 181,
        },
        {
          x: 757,
          y: 181,
        },
        {
          x: 787,
          y: 181,
        },
      ],
    },
    {
      id: '86462115-1fc8-44a0-9655-c1011ce2cec6',
      type: 'polyline',
      sourceNodeId: 'test-plan-review',
      targetNodeId: 'test-case-writing',
      startPoint: {
        x: 607,
        y: 301,
      },
      endPoint: {
        x: 647,
        y: 301,
      },
      properties: {},
      pointsList: [
        {
          x: 607,
          y: 301,
        },
        {
          x: 637,
          y: 301,
        },
        {
          x: 637,
          y: 301,
        },
        {
          x: 617,
          y: 301,
        },
        {
          x: 617,
          y: 301,
        },
        {
          x: 647,
          y: 301,
        },
      ],
    },
    {
      id: '20404f39-9f62-4a1e-b119-393dbe832b1f',
      type: 'polyline',
      sourceNodeId: 'test-case-writing',
      targetNodeId: 'new-feature-test',
      startPoint: {
        x: 747,
        y: 301,
      },
      endPoint: {
        x: 787,
        y: 301,
      },
      properties: {},
      pointsList: [
        {
          x: 747,
          y: 301,
        },
        {
          x: 777,
          y: 301,
        },
        {
          x: 777,
          y: 301,
        },
        {
          x: 757,
          y: 301,
        },
        {
          x: 757,
          y: 301,
        },
        {
          x: 787,
          y: 301,
        },
      ],
    },
    {
      id: 'c9d5c047-4a73-474c-831e-bba4fea1c15e',
      type: 'polyline',
      sourceNodeId: 'deploy-to-feature-pipeline',
      targetNodeId: 'new-feature-test',
      startPoint: {
        x: 837,
        y: 221,
      },
      endPoint: {
        x: 837,
        y: 261,
      },
      properties: {},
      pointsList: [
        {
          x: 837,
          y: 221,
        },
        {
          x: 837,
          y: 251,
        },
        {
          x: 837,
          y: 251,
        },
        {
          x: 837,
          y: 231,
        },
        {
          x: 837,
          y: 231,
        },
        {
          x: 837,
          y: 261,
        },
      ],
    },
    {
      id: '071cfe01-7780-4ef4-bcfc-5dcb7ed17246',
      type: 'polyline',
      sourceNodeId: 'new-feature-test',
      targetNodeId: 'bug-report',
      startPoint: {
        x: 887,
        y: 301,
      },
      endPoint: {
        x: 927,
        y: 301,
      },
      properties: {},
      pointsList: [
        {
          x: 887,
          y: 301,
        },
        {
          x: 917,
          y: 301,
        },
        {
          x: 917,
          y: 301,
        },
        {
          x: 897,
          y: 301,
        },
        {
          x: 897,
          y: 301,
        },
        {
          x: 927,
          y: 301,
        },
      ],
    },
    {
      id: '50108781-1ea3-42b7-86ae-5cc185af8490',
      type: 'polyline',
      sourceNodeId: 'bug-report',
      targetNodeId: 'regression-test-1',
      startPoint: {
        x: 1027,
        y: 301,
      },
      endPoint: {
        x: 1067,
        y: 301,
      },
      properties: {},
      pointsList: [
        {
          x: 1027,
          y: 301,
        },
        {
          x: 1057,
          y: 301,
        },
        {
          x: 1057,
          y: 301,
        },
        {
          x: 1037,
          y: 301,
        },
        {
          x: 1037,
          y: 301,
        },
        {
          x: 1067,
          y: 301,
        },
      ],
    },
    {
      id: 'a644dac5-5c31-4498-95c9-86411d3f5676',
      type: 'polyline',
      sourceNodeId: 'regression-test-1',
      targetNodeId: 'critical-bugs-1',
      startPoint: {
        x: 1167,
        y: 301,
      },
      endPoint: {
        x: 1207,
        y: 301,
      },
      properties: {},
      pointsList: [
        {
          x: 1167,
          y: 301,
        },
        {
          x: 1197,
          y: 301,
        },
        {
          x: 1197,
          y: 301,
        },
        {
          x: 1177,
          y: 301,
        },
        {
          x: 1177,
          y: 301,
        },
        {
          x: 1207,
          y: 301,
        },
      ],
    },
    {
      id: 'e994e268-1897-432d-8028-db2cc23470e2',
      type: 'polyline',
      sourceNodeId: 'design-spec-review',
      targetNodeId: 'test-plan-review',
      startPoint: {
        x: 427,
        y: 243,
      },
      endPoint: {
        x: 557,
        y: 261,
      },
      properties: {},
      pointsList: [
        {
          x: 427,
          y: 243,
        },
        {
          x: 557,
          y: 243,
        },
        {
          x: 557,
          y: 261,
        },
      ],
    },
    {
      id: '17991fd6-b4ec-4143-ae9a-6273aeef1a05',
      type: 'polyline',
      sourceNodeId: 'critical-bugs-1',
      targetNodeId: 'merge-to-common-branch',
      startPoint: {
        x: 1307,
        y: 301,
      },
      endPoint: {
        x: 1307,
        y: 417,
      },
      properties: {},
      text: {
        x: 1337,
        y: 377,
        value: 'No',
      },
      pointsList: [
        {
          x: 1307,
          y: 301,
        },
        {
          x: 1337,
          y: 301,
        },
        {
          x: 1337,
          y: 359,
        },
        {
          x: 1337,
          y: 359,
        },
        {
          x: 1337,
          y: 417,
        },
        {
          x: 1307,
          y: 417,
        },
      ],
    },
    {
      id: 'fc7a7ea9-03df-49e4-821d-56dba5ea270a',
      type: 'polyline',
      sourceNodeId: 'merge-to-common-branch',
      targetNodeId: 'deploy-to-uat',
      startPoint: {
        x: 1207,
        y: 417,
      },
      endPoint: {
        x: 1168,
        y: 417,
      },
      properties: {},
      pointsList: [
        {
          x: 1207,
          y: 417,
        },
        {
          x: 1177,
          y: 417,
        },
        {
          x: 1177,
          y: 417,
        },
        {
          x: 1198,
          y: 417,
        },
        {
          x: 1198,
          y: 417,
        },
        {
          x: 1168,
          y: 417,
        },
      ],
    },
    {
      id: '09a0c149-305f-4fd1-8e6b-dec32cfaedb6',
      type: 'polyline',
      sourceNodeId: 'deploy-to-uat',
      targetNodeId: 'regression-test-2',
      startPoint: {
        x: 1068,
        y: 417,
      },
      endPoint: {
        x: 1029,
        y: 417,
      },
      properties: {},
      pointsList: [
        {
          x: 1068,
          y: 417,
        },
        {
          x: 1038,
          y: 417,
        },
        {
          x: 1038,
          y: 417,
        },
        {
          x: 1059,
          y: 417,
        },
        {
          x: 1059,
          y: 417,
        },
        {
          x: 1029,
          y: 417,
        },
      ],
    },
    {
      id: '102dcd82-bc29-4447-99ad-58b290bdc2ca',
      type: 'polyline',
      sourceNodeId: 'regression-test-2',
      targetNodeId: 'demo',
      startPoint: {
        x: 929,
        y: 417,
      },
      endPoint: {
        x: 889,
        y: 417,
      },
      properties: {},
      pointsList: [
        {
          x: 929,
          y: 417,
        },
        {
          x: 899,
          y: 417,
        },
        {
          x: 899,
          y: 417,
        },
        {
          x: 919,
          y: 417,
        },
        {
          x: 919,
          y: 417,
        },
        {
          x: 889,
          y: 417,
        },
      ],
    },
    {
      id: 'b3e0d6ab-f796-49dc-b934-951a5aa810af',
      type: 'polyline',
      sourceNodeId: 'demo',
      targetNodeId: 'pre-prod-verify',
      startPoint: {
        x: 789,
        y: 417,
      },
      endPoint: {
        x: 746,
        y: 417,
      },
      properties: {},
      pointsList: [
        {
          x: 789,
          y: 417,
        },
        {
          x: 759,
          y: 417,
        },
        {
          x: 759,
          y: 417,
        },
        {
          x: 776,
          y: 417,
        },
        {
          x: 776,
          y: 417,
        },
        {
          x: 746,
          y: 417,
        },
      ],
    },
    {
      id: 'ef671096-66d4-49ff-bc7c-d366f73f3b1b',
      type: 'polyline',
      sourceNodeId: 'pre-prod-verify',
      targetNodeId: 'sup-test',
      startPoint: {
        x: 646,
        y: 417,
      },
      endPoint: {
        x: 187,
        y: 561,
      },
      properties: {},
      pointsList: [
        {
          x: 646,
          y: 417,
        },
        {
          x: 157,
          y: 417,
        },
        {
          x: 157,
          y: 561,
        },
        {
          x: 187,
          y: 561,
        },
      ],
    },
    {
      id: '8e295719-a346-449f-b3fb-b1b5664b9d46',
      type: 'polyline',
      sourceNodeId: 'pre-prod-verify',
      targetNodeId: 'g11n-test',
      startPoint: {
        x: 646,
        y: 417,
      },
      endPoint: {
        x: 187,
        y: 661,
      },
      properties: {},
      pointsList: [
        {
          x: 646,
          y: 417,
        },
        {
          x: 157,
          y: 417,
        },
        {
          x: 157,
          y: 661,
        },
        {
          x: 187,
          y: 661,
        },
      ],
    },
    {
      id: 'f95043ac-9ad7-477c-bef4-a498c9dc36c6',
      type: 'polyline',
      sourceNodeId: 'pre-prod-verify',
      targetNodeId: 'ix-documentation',
      startPoint: {
        x: 646,
        y: 417,
      },
      endPoint: {
        x: 187,
        y: 761,
      },
      properties: {},
      pointsList: [
        {
          x: 646,
          y: 417,
        },
        {
          x: 157,
          y: 417,
        },
        {
          x: 157,
          y: 761,
        },
        {
          x: 187,
          y: 761,
        },
      ],
    },
    {
      id: 'd21bca2f-c9d2-4a27-a5e2-5f525c14a7ca',
      type: 'polyline',
      sourceNodeId: 'pre-prod-verify',
      targetNodeId: 'marketing',
      startPoint: {
        x: 646,
        y: 417,
      },
      endPoint: {
        x: 187,
        y: 861,
      },
      properties: {},
      text: {
        x: 450,
        y: 417,
        value: 'Yes',
      },
      pointsList: [
        {
          x: 646,
          y: 417,
        },
        {
          x: 157,
          y: 417,
        },
        {
          x: 157,
          y: 861,
        },
        {
          x: 187,
          y: 861,
        },
      ],
    },
    {
      id: 'cd1887b1-57e5-454c-b7bf-e83502fe5b99',
      type: 'polyline',
      sourceNodeId: 'critical-bug-2',
      targetNodeId: 'merge-to-master-branch',
      startPoint: {
        x: 526,
        y: 641,
      },
      endPoint: {
        x: 646,
        y: 641,
      },
      properties: {},
      text: {
        x: 575,
        y: 641,
        value: 'No',
      },
      pointsList: [
        {
          x: 526,
          y: 641,
        },
        {
          x: 646,
          y: 641,
        },
      ],
    },
    {
      id: 'b41b4e35-e4da-4b00-8c93-d969c66763df',
      type: 'polyline',
      sourceNodeId: 'merge-to-master-branch',
      targetNodeId: 'stg-upgrade',
      startPoint: {
        x: 746,
        y: 641,
      },
      endPoint: {
        x: 790,
        y: 641,
      },
      properties: {},
      pointsList: [
        {
          x: 746,
          y: 641,
        },
        {
          x: 776,
          y: 641,
        },
        {
          x: 776,
          y: 641,
        },
        {
          x: 760,
          y: 641,
        },
        {
          x: 760,
          y: 641,
        },
        {
          x: 790,
          y: 641,
        },
      ],
    },
    {
      id: '3f82fedc-d960-442c-984f-3ee24c9bd6f7',
      type: 'polyline',
      sourceNodeId: 'marketing',
      targetNodeId: 'release',
      startPoint: {
        x: 287,
        y: 861,
      },
      endPoint: {
        x: 1259,
        y: 811,
      },
      properties: {},
      pointsList: [
        {
          x: 287,
          y: 861,
        },
        {
          x: 1259,
          y: 861,
        },
        {
          x: 1259,
          y: 811,
        },
      ],
    },
    {
      id: '49d88401-3ec0-4a1f-9eea-77aadb4d872d',
      type: 'polyline',
      sourceNodeId: 'sup-test',
      targetNodeId: 'critical-bug-2',
      startPoint: {
        x: 287,
        y: 561,
      },
      endPoint: {
        x: 426,
        y: 641,
      },
      properties: {},
      pointsList: [
        {
          x: 287,
          y: 561,
        },
        {
          x: 356,
          y: 561,
        },
        {
          x: 356,
          y: 641,
        },
        {
          x: 426,
          y: 641,
        },
      ],
    },
    {
      id: 'e0fed141-cedc-422b-8b66-4605fd48130b',
      type: 'polyline',
      sourceNodeId: 'g11n-test',
      targetNodeId: 'critical-bug-2',
      startPoint: {
        x: 287,
        y: 661,
      },
      endPoint: {
        x: 426,
        y: 641,
      },
      properties: {},
      pointsList: [
        {
          x: 287,
          y: 661,
        },
        {
          x: 356,
          y: 661,
        },
        {
          x: 356,
          y: 641,
        },
        {
          x: 426,
          y: 641,
        },
      ],
    },
    {
      id: 'f07090a4-7435-42b0-b254-9cf4fe77f4e5',
      type: 'polyline',
      sourceNodeId: 'stg-upgrade',
      targetNodeId: 'stg-sanity-test',
      startPoint: {
        x: 890,
        y: 641,
      },
      endPoint: {
        x: 928,
        y: 641,
      },
      properties: {},
      pointsList: [
        {
          x: 890,
          y: 641,
        },
        {
          x: 920,
          y: 641,
        },
        {
          x: 920,
          y: 641,
        },
        {
          x: 898,
          y: 641,
        },
        {
          x: 898,
          y: 641,
        },
        {
          x: 928,
          y: 641,
        },
      ],
    },
    {
      id: 'b0ecf399-fb38-4faa-9b45-fea1bd37c082',
      type: 'polyline',
      sourceNodeId: 'stg-sanity-test',
      targetNodeId: 'prod-upgrade',
      startPoint: {
        x: 1028,
        y: 641,
      },
      endPoint: {
        x: 1068,
        y: 641,
      },
      properties: {},
      pointsList: [
        {
          x: 1028,
          y: 641,
        },
        {
          x: 1058,
          y: 641,
        },
        {
          x: 1058,
          y: 641,
        },
        {
          x: 1038,
          y: 641,
        },
        {
          x: 1038,
          y: 641,
        },
        {
          x: 1068,
          y: 641,
        },
      ],
    },
    {
      id: '9b9ea41d-368f-49a7-8e62-efd8c5c438d7',
      type: 'polyline',
      sourceNodeId: 'prod-upgrade',
      targetNodeId: 'prod-sanity-test',
      startPoint: {
        x: 1168,
        y: 641,
      },
      endPoint: {
        x: 1208,
        y: 641,
      },
      properties: {},
      pointsList: [
        {
          x: 1168,
          y: 641,
        },
        {
          x: 1198,
          y: 641,
        },
        {
          x: 1198,
          y: 641,
        },
        {
          x: 1178,
          y: 641,
        },
        {
          x: 1178,
          y: 641,
        },
        {
          x: 1208,
          y: 641,
        },
      ],
    },
    {
      id: 'b3fe87ae-938c-44d7-bfb4-62bccbe2e68e',
      type: 'polyline',
      sourceNodeId: 'pre-prod-verify',
      targetNodeId: 'merge-to-master-branch',
      startPoint: {
        x: 696,
        y: 467,
      },
      endPoint: {
        x: 696,
        y: 601,
      },
      properties: {},
      text: {
        x: 696,
        y: 547,
        value: 'No',
      },
      pointsList: [
        {
          x: 696,
          y: 467,
        },
        {
          x: 696,
          y: 601,
        },
      ],
    },
    {
      id: '7c190a21-f74e-4e79-a692-5ace7a33bfd0',
      type: 'polyline',
      sourceNodeId: 'critical-bug-2',
      targetNodeId: 'bug-fix-2',
      startPoint: {
        x: 476,
        y: 591,
      },
      endPoint: {
        x: 476,
        y: 546,
      },
      properties: {},
      text: {
        x: 476,
        y: 586,
        value: 'Yes',
      },
      pointsList: [
        {
          x: 476,
          y: 591,
        },
        {
          x: 476,
          y: 561,
        },
        {
          x: 476,
          y: 561,
        },
        {
          x: 476,
          y: 576,
        },
        {
          x: 476,
          y: 576,
        },
        {
          x: 476,
          y: 546,
        },
      ],
    },
    {
      id: 'da1ce562-febe-4528-a792-f4ccdaf2eb7c',
      type: 'polyline',
      sourceNodeId: 'bug-fix-2',
      targetNodeId: 'merge-to-common-branch',
      startPoint: {
        x: 526,
        y: 506,
      },
      endPoint: {
        x: 1257,
        y: 457,
      },
      properties: {},
      pointsList: [
        {
          x: 526,
          y: 506,
        },
        {
          x: 1257,
          y: 506,
        },
        {
          x: 1257,
          y: 457,
        },
      ],
    },
    {
      id: 'b0d71025-164e-425a-a342-a6d6f8722668',
      type: 'polyline',
      sourceNodeId: 'bug-fix-1',
      targetNodeId: 'merge-to-feature-branch',
      startPoint: {
        x: 697,
        y: 101,
      },
      endPoint: {
        x: 697,
        y: 141,
      },
      properties: {},
      pointsList: [
        {
          x: 697,
          y: 101,
        },
        {
          x: 697,
          y: 131,
        },
        {
          x: 697,
          y: 131,
        },
        {
          x: 697,
          y: 111,
        },
        {
          x: 697,
          y: 111,
        },
        {
          x: 697,
          y: 141,
        },
      ],
    },
    {
      id: 'baa8843d-f3e9-4cde-92c8-703edcd3c7c4',
      type: 'polyline',
      sourceNodeId: 'bug-report',
      targetNodeId: 'bug-fix-1',
      startPoint: {
        x: 977,
        y: 261,
      },
      endPoint: {
        x: 747,
        y: 71,
      },
      properties: {},
      pointsList: [
        {
          x: 977,
          y: 261,
        },
        {
          x: 977,
          y: 71,
        },
        {
          x: 747,
          y: 71,
        },
      ],
    },
    {
      id: '13fe324f-d90d-46d5-a415-929574203c10',
      type: 'polyline',
      sourceNodeId: 'critical-bugs-1',
      targetNodeId: 'bug-fix-1',
      startPoint: {
        x: 1257,
        y: 251,
      },
      endPoint: {
        x: 747,
        y: 48,
      },
      properties: {},
      text: {
        x: 1257,
        y: 151,
        value: 'Yes',
      },
      pointsList: [
        {
          x: 1257,
          y: 251,
        },
        {
          x: 1257,
          y: 48,
        },
        {
          x: 747,
          y: 48,
        },
      ],
    },
    {
      id: 'f30ef3f2-a982-4ce4-88d5-a3b307644bd5',
      type: 'polyline',
      sourceNodeId: 'ix-documentation',
      targetNodeId: 'release',
      startPoint: {
        x: 287,
        y: 761,
      },
      endPoint: {
        x: 1209,
        y: 761,
      },
      properties: {},
      pointsList: [
        {
          x: 287,
          y: 761,
        },
        {
          x: 1209,
          y: 761,
        },
      ],
    },
    {
      id: '9b789a06-63e5-4b64-be1a-052d5b0e7cc8',
      type: 'polyline',
      sourceNodeId: 'prod-sanity-test',
      targetNodeId: 'release',
      startPoint: {
        x: 1258,
        y: 681,
      },
      endPoint: {
        x: 1259,
        y: 711,
      },
      properties: {},
      pointsList: [
        {
          x: 1258,
          y: 681,
        },
        {
          x: 1258,
          y: 711,
        },
        {
          x: 1258,
          y: 711,
        },
        {
          x: 1258,
          y: 681,
        },
        {
          x: 1259,
          y: 681,
        },
        {
          x: 1259,
          y: 711,
        },
      ],
    },
  ],
};

export default data;
