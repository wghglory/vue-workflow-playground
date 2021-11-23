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
        value: 'Merge to\nfeature branch',
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
        value: 'Deploy to\nfeature pipeline',
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
      y: 441,
      properties: {},
      text: {
        x: 1257,
        y: 441,
        value: 'Merge to\nCommon branch',
      },
    },
    {
      id: 'deploy-to-uat',
      type: 'done-rect',
      x: 1117,
      y: 441,
      properties: {},
      text: {
        x: 1117,
        y: 441,
        value: 'Deploy to \nUAT',
      },
    },
    {
      id: 'regression-test-2',
      type: 'done-rect',
      x: 977,
      y: 441,
      properties: {},
      text: {
        x: 977,
        y: 441,
        value: 'Regression\nTest',
      },
    },
    {
      id: 'demo',
      type: 'done-rect',
      x: 837,
      y: 441,
      properties: {},
      text: {
        x: 837,
        y: 441,
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
      x: 697,
      y: 441,
      properties: {},
      text: {
        x: 697,
        y: 441,
        value: 'Pre-Prod\nVerify?',
      },
      rx: 50,
      ry: 50,
    },
    {
      id: 'critical-bug-2',
      type: 'diamond',
      x: 457,
      y: 641,
      properties: {},
      text: {
        x: 457,
        y: 641,
        value: 'Critical\nBugs?',
      },
      rx: 50,
      ry: 50,
    },
    {
      id: 'merge-to-master-branch',
      type: 'rect',
      x: 617,
      y: 641,
      properties: {},
      text: {
        x: 617,
        y: 641,
        value: 'Merge to\nMaster branch',
      },
    },
    {
      id: 'bug-fix-2',
      type: 'rect',
      x: 457,
      y: 501,
      properties: {},
      text: {
        x: 457,
        y: 501,
        value: 'Bug Fix 2',
      },
    },
    {
      id: 'stg-upgrade',
      type: 'rect',
      x: 777,
      y: 641,
      properties: {},
      text: {
        x: 777,
        y: 641,
        value: 'STG\nUpgrade',
      },
    },
    {
      id: 'stg-sanity-test',
      type: 'rect',
      x: 937,
      y: 641,
      properties: {},
      text: {
        x: 937,
        y: 641,
        value: 'STG\nSanity Test',
      },
    },
    {
      id: 'prod-upgrade',
      type: 'rect',
      x: 1077,
      y: 641,
      properties: {},
      text: {
        x: 1077,
        y: 641,
        value: 'PROD\nupgrade',
      },
    },
    {
      id: 'prod-sanity-test',
      type: 'rect',
      x: 1217,
      y: 641,
      properties: {},
      text: {
        x: 1217,
        y: 641,
        value: 'PROD\nSanity Test',
      },
    },
    {
      id: 'release',
      type: 'circle',
      x: 1377,
      y: 761,
      properties: {},
      text: {
        x: 1377,
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
        y: 441,
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
          y: 371,
        },
        {
          x: 1337,
          y: 371,
        },
        {
          x: 1337,
          y: 441,
        },
        {
          x: 1307,
          y: 441,
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
        y: 441,
      },
      endPoint: {
        x: 1167,
        y: 441,
      },
      properties: {},
      pointsList: [
        {
          x: 1207,
          y: 441,
        },
        {
          x: 1177,
          y: 441,
        },
        {
          x: 1177,
          y: 441,
        },
        {
          x: 1197,
          y: 441,
        },
        {
          x: 1197,
          y: 441,
        },
        {
          x: 1167,
          y: 441,
        },
      ],
    },
    {
      id: '09a0c149-305f-4fd1-8e6b-dec32cfaedb6',
      type: 'polyline',
      sourceNodeId: 'deploy-to-uat',
      targetNodeId: 'regression-test-2',
      startPoint: {
        x: 1067,
        y: 441,
      },
      endPoint: {
        x: 1027,
        y: 441,
      },
      properties: {},
      pointsList: [
        {
          x: 1067,
          y: 441,
        },
        {
          x: 1037,
          y: 441,
        },
        {
          x: 1037,
          y: 441,
        },
        {
          x: 1057,
          y: 441,
        },
        {
          x: 1057,
          y: 441,
        },
        {
          x: 1027,
          y: 441,
        },
      ],
    },
    {
      id: '102dcd82-bc29-4447-99ad-58b290bdc2ca',
      type: 'polyline',
      sourceNodeId: 'regression-test-2',
      targetNodeId: 'demo',
      startPoint: {
        x: 927,
        y: 441,
      },
      endPoint: {
        x: 887,
        y: 441,
      },
      properties: {},
      pointsList: [
        {
          x: 927,
          y: 441,
        },
        {
          x: 897,
          y: 441,
        },
        {
          x: 897,
          y: 441,
        },
        {
          x: 917,
          y: 441,
        },
        {
          x: 917,
          y: 441,
        },
        {
          x: 887,
          y: 441,
        },
      ],
    },
    {
      id: 'b3e0d6ab-f796-49dc-b934-951a5aa810af',
      type: 'polyline',
      sourceNodeId: 'demo',
      targetNodeId: 'pre-prod-verify',
      startPoint: {
        x: 787,
        y: 441,
      },
      endPoint: {
        x: 747,
        y: 441,
      },
      properties: {},
      pointsList: [
        {
          x: 787,
          y: 441,
        },
        {
          x: 757,
          y: 441,
        },
        {
          x: 757,
          y: 441,
        },
        {
          x: 777,
          y: 441,
        },
        {
          x: 777,
          y: 441,
        },
        {
          x: 747,
          y: 441,
        },
      ],
    },
    {
      id: 'ef671096-66d4-49ff-bc7c-d366f73f3b1b',
      type: 'polyline',
      sourceNodeId: 'pre-prod-verify',
      targetNodeId: 'sup-test',
      startPoint: {
        x: 647,
        y: 441,
      },
      endPoint: {
        x: 187,
        y: 561,
      },
      properties: {},
      pointsList: [
        {
          x: 647,
          y: 441,
        },
        {
          x: 157,
          y: 441,
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
        x: 647,
        y: 441,
      },
      endPoint: {
        x: 187,
        y: 661,
      },
      properties: {},
      pointsList: [
        {
          x: 647,
          y: 441,
        },
        {
          x: 157,
          y: 441,
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
        x: 647,
        y: 441,
      },
      endPoint: {
        x: 187,
        y: 761,
      },
      properties: {},
      pointsList: [
        {
          x: 647,
          y: 441,
        },
        {
          x: 157,
          y: 441,
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
        x: 647,
        y: 441,
      },
      endPoint: {
        x: 187,
        y: 861,
      },
      properties: {},
      text: {
        x: 450,
        y: 441,
        value: 'Yes',
      },
      pointsList: [
        {
          x: 647,
          y: 441,
        },
        {
          x: 157,
          y: 441,
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
        x: 507,
        y: 641,
      },
      endPoint: {
        x: 567,
        y: 641,
      },
      properties: {},
      text: {
        x: 538,
        y: 641,
        value: 'No',
      },
      pointsList: [
        {
          x: 507,
          y: 641,
        },
        {
          x: 567,
          y: 641,
        },
      ],
    },
    {
      id: 'd61bd672-2142-46aa-8797-63377c9ee714',
      type: 'polyline',
      sourceNodeId: 'bug-fix-1',
      targetNodeId: 'merge-to-common-branch',
      startPoint: {
        x: 507,
        y: 511,
      },
      endPoint: {
        x: 1257,
        y: 481,
      },
      properties: {},
      pointsList: [
        {
          x: 507,
          y: 511,
        },
        {
          x: 1257,
          y: 511,
        },
        {
          x: 1257,
          y: 481,
        },
      ],
    },
    {
      id: 'eb5cbfc9-69ba-4c34-9a27-f3717b370b55',
      type: 'polyline',
      sourceNodeId: 'pre-prod-verify',
      targetNodeId: 'merge-to-master-branch',
      startPoint: {
        x: 697,
        y: 491,
      },
      endPoint: {
        x: 617,
        y: 601,
      },
      properties: {},
      text: {
        x: 651,
        y: 546,
        value: 'No',
      },
      pointsList: [
        {
          x: 697,
          y: 491,
        },
        {
          x: 697,
          y: 546,
        },
        {
          x: 617,
          y: 546,
        },
        {
          x: 617,
          y: 601,
        },
      ],
    },
    {
      id: '65e9000a-7401-4cc8-a8f3-a66931a12508',
      type: 'polyline',
      sourceNodeId: 'critical-bug-2',
      targetNodeId: 'bug-fix-1',
      startPoint: {
        x: 457,
        y: 591,
      },
      endPoint: {
        x: 457,
        y: 541,
      },
      properties: {},
      text: {
        x: 457,
        y: 590,
        value: 'Yes',
      },
      pointsList: [
        {
          x: 457,
          y: 591,
        },
        {
          x: 457,
          y: 561,
        },
        {
          x: 457,
          y: 561,
        },
        {
          x: 457,
          y: 571,
        },
        {
          x: 457,
          y: 571,
        },
        {
          x: 457,
          y: 541,
        },
      ],
    },
    {
      id: 'b41b4e35-e4da-4b00-8c93-d969c66763df',
      type: 'polyline',
      sourceNodeId: 'merge-to-master-branch',
      targetNodeId: 'stg-upgrade',
      startPoint: {
        x: 667,
        y: 641,
      },
      endPoint: {
        x: 727,
        y: 641,
      },
      properties: {},
      pointsList: [
        {
          x: 667,
          y: 641,
        },
        {
          x: 727,
          y: 641,
        },
      ],
    },
    {
      id: 'ee03f7d3-70ae-44b9-8ff4-11194667cfd1',
      type: 'polyline',
      sourceNodeId: 'stg-upgrade',
      targetNodeId: 'stg-sanity-test',
      startPoint: {
        x: 827,
        y: 641,
      },
      endPoint: {
        x: 887,
        y: 641,
      },
      properties: {},
      pointsList: [
        {
          x: 827,
          y: 641,
        },
        {
          x: 887,
          y: 641,
        },
      ],
    },
    {
      id: '23b8ace4-acd5-4171-b9dc-0461a5f70a46',
      type: 'polyline',
      sourceNodeId: 'stg-sanity-test',
      targetNodeId: 'prod-upgrade',
      startPoint: {
        x: 987,
        y: 641,
      },
      endPoint: {
        x: 1027,
        y: 641,
      },
      properties: {},
      pointsList: [
        {
          x: 987,
          y: 641,
        },
        {
          x: 1017,
          y: 641,
        },
        {
          x: 1017,
          y: 641,
        },
        {
          x: 997,
          y: 641,
        },
        {
          x: 997,
          y: 641,
        },
        {
          x: 1027,
          y: 641,
        },
      ],
    },
    {
      id: '23d3eed1-7e82-4a8d-a509-a6bda22fac35',
      type: 'polyline',
      sourceNodeId: 'prod-upgrade',
      targetNodeId: 'prod-sanity-test',
      startPoint: {
        x: 1127,
        y: 641,
      },
      endPoint: {
        x: 1167,
        y: 641,
      },
      properties: {},
      pointsList: [
        {
          x: 1127,
          y: 641,
        },
        {
          x: 1157,
          y: 641,
        },
        {
          x: 1157,
          y: 641,
        },
        {
          x: 1137,
          y: 641,
        },
        {
          x: 1137,
          y: 641,
        },
        {
          x: 1167,
          y: 641,
        },
      ],
    },
    {
      id: '8d40b870-096e-4720-90bc-f58d8a0115c5',
      type: 'polyline',
      sourceNodeId: 'prod-sanity-test',
      targetNodeId: 'release',
      startPoint: {
        x: 1267,
        y: 641,
      },
      endPoint: {
        x: 1377,
        y: 711,
      },
      properties: {},
      pointsList: [
        {
          x: 1267,
          y: 641,
        },
        {
          x: 1377,
          y: 641,
        },
        {
          x: 1377,
          y: 711,
        },
      ],
    },
    {
      id: '90a8c08d-b091-4204-a28e-17345bda9645',
      type: 'polyline',
      sourceNodeId: 'ix-documentation',
      targetNodeId: 'release',
      startPoint: {
        x: 287,
        y: 761,
      },
      endPoint: {
        x: 1327,
        y: 761,
      },
      properties: {},
      pointsList: [
        {
          x: 287,
          y: 761,
        },
        {
          x: 1327,
          y: 761,
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
        x: 1377,
        y: 811,
      },
      properties: {},
      pointsList: [
        {
          x: 287,
          y: 861,
        },
        {
          x: 1377,
          y: 861,
        },
        {
          x: 1377,
          y: 811,
        },
      ],
    },
    {
      id: 'd91444aa-f71c-448e-9d2f-c9f0b30d484b',
      type: 'polyline',
      sourceNodeId: 'bug-fix-2',
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
      id: 'f15c32ee-00a4-4e6d-9d3f-5c012ac21da6',
      type: 'polyline',
      sourceNodeId: 'bug-report',
      targetNodeId: 'bug-fix-2',
      startPoint: {
        x: 977,
        y: 261,
      },
      endPoint: {
        x: 747,
        y: 61,
      },
      properties: {},
      pointsList: [
        {
          x: 977,
          y: 261,
        },
        {
          x: 977,
          y: 61,
        },
        {
          x: 747,
          y: 61,
        },
      ],
    },
    {
      id: 'e2406be8-fbd9-4749-b38e-53333d25be5e',
      type: 'polyline',
      sourceNodeId: 'critical-bugs-1',
      targetNodeId: 'bug-fix-2',
      startPoint: {
        x: 1257,
        y: 251,
      },
      endPoint: {
        x: 747,
        y: 61,
      },
      properties: {},
      text: {
        x: 1257,
        y: 189,
        value: 'Yes',
      },
      pointsList: [
        {
          x: 1257,
          y: 251,
        },
        {
          x: 1257,
          y: 61,
        },
        {
          x: 747,
          y: 61,
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
        x: 407,
        y: 641,
      },
      properties: {},
      pointsList: [
        {
          x: 287,
          y: 561,
        },
        {
          x: 347.24242424242425,
          y: 561,
        },
        {
          x: 347.24242424242425,
          y: 641,
        },
        {
          x: 407,
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
        x: 407,
        y: 641,
      },
      properties: {},
      pointsList: [
        {
          x: 287,
          y: 661,
        },
        {
          x: 347,
          y: 661,
        },
        {
          x: 347,
          y: 641,
        },
        {
          x: 407,
          y: 641,
        },
      ],
    },
  ],
};

export default data;
