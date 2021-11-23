const data = {
  nodes: [
    // test data
    {
      id: 10,
      type: 'custom:square',
      x: 300,
      y: 200,
      text: 'Square',
      properties: {
        name: 'derek',
      },
    },
    {
      id: 2,
      type: 'custom:rect',
      x: 500,
      y: 100,
      text: 'Custom Rect',
      properties: {
        name: 'derek',
        isActiveNode: true,
      },
    },

    // below is initial
    {
      id: '6f71e7cf-823e-470f-a3ef-c9cc92ce0012',
      type: 'circle',
      x: 160,
      y: 160,
      properties: {},
      text: {
        x: 160,
        y: 160,
        value: 'Story Review',
      },
    },
    {
      id: 'ccf0465e-ec3f-4c41-9714-c015fad527bc',
      type: 'rect',
      x: 320,
      y: 60,
      properties: {},
      text: {
        x: 320,
        y: 60,
        value: 'Pipeline\nCreation',
      },
    },
    {
      id: '7c08dcad-96f9-4761-a0f9-857f8efe2a09',
      type: 'rect',
      x: 320,
      y: 160,
      properties: {},
      text: {
        x: 320,
        y: 160,
        value: 'Design Spec\nReview',
      },
    },
    {
      id: '1f0bc3e0-0186-44a8-9b93-7473ca01e194',
      type: 'rect',
      x: 500,
      y: 240,
      properties: {},
      text: {
        x: 500,
        y: 240,
        value: 'Test Plan\nReview',
      },
    },
    {
      id: '3881bd46-6380-4e71-b1d6-0bd827423124',
      type: 'rect',
      x: 500,
      y: 120,
      properties: {},
      text: {
        x: 500,
        y: 120,
        value: 'Development\n& UT',
      },
    },
    {
      id: 'da1056aa-fc8a-4ef6-9952-544bed1c2094',
      type: 'rect',
      x: 640,
      y: 120,
      properties: {},
      text: {
        x: 640,
        y: 120,
        value: 'Merge to\nfeature branch',
      },
    },
    {
      id: '1f7b787f-193e-4847-a5a3-3e73d560a5d2',
      type: 'rect',
      x: 640,
      y: 240,
      properties: {},
      text: {
        x: 640,
        y: 240,
        value: 'Test Case\nWriting',
      },
    },
    {
      id: 'f0afd931-458f-45ed-82f0-c26dfa5c7ad0',
      type: 'rect',
      x: 780,
      y: 120,
      properties: {},
      text: {
        x: 780,
        y: 120,
        value: 'Deploy to\nfeature pipeline',
      },
    },
    {
      id: '9d657e91-1074-4c12-99f1-e67b5768ba6f',
      type: 'rect',
      x: 780,
      y: 240,
      properties: {},
      text: {
        x: 780,
        y: 240,
        value: 'New Feature\nTest',
      },
    },
    {
      id: 'a93a5154-37da-4449-8c73-75ce117a2642',
      type: 'rect',
      x: 920,
      y: 240,
      properties: {},
      text: {
        x: 920,
        y: 240,
        value: 'Bug Report',
      },
    },
    {
      id: '40943aae-d7a0-40c7-b715-5e6baa7331a4',
      type: 'rect',
      x: 1060,
      y: 240,
      properties: {},
      text: {
        x: 1060,
        y: 240,
        value: 'Regression\nTest',
      },
    },
    {
      id: 'fb4ed2f5-4642-4e58-bb71-ccc2b43c6e5a',
      type: 'diamond',
      x: 1200,
      y: 240,
      properties: {},
      text: {
        x: 1200,
        y: 240,
        value: 'Critical\nBugs?',
      },
      rx: 50,
      ry: 50,
    },
    {
      id: '53135fbd-c19c-4eee-9450-db6e0d2a9627',
      type: 'rect',
      x: 1200,
      y: 380,
      properties: {},
      text: {
        x: 1200,
        y: 380,
        value: 'Merge to\nCommon branch',
      },
    },
    {
      id: '7145927e-3f87-4e9d-b058-99e10b476ec6',
      type: 'rect',
      x: 1060,
      y: 380,
      properties: {},
      text: {
        x: 1060,
        y: 380,
        value: 'Deploy to \nUAT',
      },
    },
    {
      id: '6b37ca8b-8520-4376-a4c5-6fda48ce3d81',
      type: 'rect',
      x: 920,
      y: 380,
      properties: {},
      text: {
        x: 920,
        y: 380,
        value: 'Regression\nTest',
      },
    },
    {
      id: '8398c903-e9ce-4f07-8831-a88a1effa6b1',
      type: 'rect',
      x: 780,
      y: 380,
      properties: {},
      text: {
        x: 780,
        y: 380,
        value: 'Demo',
      },
    },
    {
      id: 'd2924a8d-498f-4098-8a5d-4bd0343c3a7b',
      type: 'rect',
      x: 180,
      y: 500,
      properties: {},
      text: {
        x: 180,
        y: 500,
        value: 'SUP\nTest',
      },
    },
    {
      id: '808586f6-a7be-4378-8296-69c44f1e464a',
      type: 'rect',
      x: 180,
      y: 600,
      properties: {},
      text: {
        x: 180,
        y: 600,
        value: 'G11N/L10N\nTest',
      },
    },
    {
      id: 'e3a2ccdd-dcfc-4162-b049-7374cbd353f1',
      type: 'rect',
      x: 180,
      y: 700,
      properties: {},
      text: {
        x: 180,
        y: 700,
        value: 'IX\nDocumentation',
      },
    },
    {
      id: '485de158-1d20-4576-9752-89bfdabd3fde',
      type: 'rect',
      x: 180,
      y: 800,
      properties: {},
      text: {
        x: 180,
        y: 800,
        value: 'Marketing',
      },
    },
    {
      id: 'f8481669-541e-4eb6-9285-616388974c11',
      type: 'diamond',
      x: 640,
      y: 380,
      properties: {},
      text: {
        x: 640,
        y: 380,
        value: 'Pre-Prod\nVerify?',
      },
      rx: 50,
      ry: 50,
    },
    {
      id: '0a963d00-054a-46ca-b24f-34a90751930a',
      type: 'diamond',
      x: 400,
      y: 580,
      properties: {},
      text: {
        x: 400,
        y: 580,
        value: 'Critical\nBugs?',
      },
      rx: 50,
      ry: 50,
    },
    {
      id: 'f62ed1ea-5e32-4ae4-8036-12cbd91e5f8b',
      type: 'rect',
      x: 560,
      y: 580,
      properties: {},
      text: {
        x: 560,
        y: 580,
        value: 'Merge to\nMaster branch',
      },
    },
    {
      id: '5d8a33ed-9ad8-4125-8033-f1d41d10ae07',
      type: 'rect',
      x: 400,
      y: 440,
      properties: {},
      text: {
        x: 400,
        y: 440,
        value: 'Bug Fix',
      },
    },
    {
      id: 'c4fe91f1-c369-49eb-9d38-4fe8fb849264',
      type: 'rect',
      x: 720,
      y: 580,
      properties: {},
      text: {
        x: 720,
        y: 580,
        value: 'STG\nUpgrade',
      },
    },
    {
      id: '1da0bf97-e312-4f5d-9a78-28e47c8b53ca',
      type: 'rect',
      x: 880,
      y: 580,
      properties: {},
      text: {
        x: 880,
        y: 580,
        value: 'STG\nSanity Test',
      },
    },
    {
      id: 'a6971f7c-c33a-47bc-9510-d165de13e718',
      type: 'rect',
      x: 1020,
      y: 580,
      properties: {},
      text: {
        x: 1020,
        y: 580,
        value: 'PROD\nupgrade',
      },
    },
    {
      id: '399512d4-f919-4169-a1ec-3328699e502d',
      type: 'rect',
      x: 1160,
      y: 580,
      properties: {},
      text: {
        x: 1160,
        y: 580,
        value: 'PROD\nSanity Test',
      },
    },
    {
      id: '32c3c506-87d4-4078-86e6-8caa0bc75216',
      type: 'circle',
      x: 1320,
      y: 700,
      properties: {},
      text: {
        x: 1320,
        y: 700,
        value: 'Release',
      },
    },
    {
      id: '8077da5b-d952-4335-8595-c12f174c4ad7',
      type: 'rect',
      x: 640,
      y: 0,
      properties: {},
      text: {
        x: 640,
        y: 0,
        value: 'Bug Fix',
      },
    },
  ],
  edges: [
    {
      id: 'fbe029b7-48af-4ea3-a917-56006742267c',
      type: 'polyline',
      sourceNodeId: '6f71e7cf-823e-470f-a3ef-c9cc92ce0012',
      targetNodeId: 'ccf0465e-ec3f-4c41-9714-c015fad527bc',
      startPoint: {
        x: 160,
        y: 110,
      },
      endPoint: {
        x: 270,
        y: 60,
      },
      properties: {},
      pointsList: [
        {
          x: 160,
          y: 110,
        },
        {
          x: 160,
          y: 60,
        },
        {
          x: 270,
          y: 60,
        },
      ],
    },
    {
      id: '824524d6-3f6d-4f46-9741-cc2e154617b9',
      type: 'polyline',
      sourceNodeId: '6f71e7cf-823e-470f-a3ef-c9cc92ce0012',
      targetNodeId: '7c08dcad-96f9-4761-a0f9-857f8efe2a09',
      startPoint: {
        x: 210,
        y: 160,
      },
      endPoint: {
        x: 270,
        y: 160,
      },
      properties: {},
      pointsList: [
        {
          x: 210,
          y: 160,
        },
        {
          x: 270,
          y: 160,
        },
      ],
    },
    {
      id: 'd2ce6a45-8352-4e92-b8d3-562a653e5fb6',
      type: 'polyline',
      sourceNodeId: 'ccf0465e-ec3f-4c41-9714-c015fad527bc',
      targetNodeId: '3881bd46-6380-4e71-b1d6-0bd827423124',
      startPoint: {
        x: 370,
        y: 60,
      },
      endPoint: {
        x: 450,
        y: 120,
      },
      properties: {},
      pointsList: [
        {
          x: 370,
          y: 60,
        },
        {
          x: 410,
          y: 60,
        },
        {
          x: 410,
          y: 120,
        },
        {
          x: 450,
          y: 120,
        },
      ],
    },
    {
      id: 'f7d263a2-3c2e-4667-8604-c5f3f3038930',
      type: 'polyline',
      sourceNodeId: '7c08dcad-96f9-4761-a0f9-857f8efe2a09',
      targetNodeId: '3881bd46-6380-4e71-b1d6-0bd827423124',
      startPoint: {
        x: 370,
        y: 162,
      },
      endPoint: {
        x: 450,
        y: 120,
      },
      properties: {},
      pointsList: [
        {
          x: 370,
          y: 162,
        },
        {
          x: 410,
          y: 162,
        },
        {
          x: 410,
          y: 120,
        },
        {
          x: 450,
          y: 120,
        },
      ],
    },
    {
      id: '38fcce08-b6f8-47bb-9d2a-0658e4d6765a',
      type: 'polyline',
      sourceNodeId: '6f71e7cf-823e-470f-a3ef-c9cc92ce0012',
      targetNodeId: '1f0bc3e0-0186-44a8-9b93-7473ca01e194',
      startPoint: {
        x: 160,
        y: 210,
      },
      endPoint: {
        x: 450,
        y: 240,
      },
      properties: {},
      pointsList: [
        {
          x: 160,
          y: 210,
        },
        {
          x: 160,
          y: 240,
        },
        {
          x: 450,
          y: 240,
        },
      ],
    },
    {
      id: 'f232b202-56bf-4e17-8d5b-4e20c36dc3fd',
      type: 'polyline',
      sourceNodeId: '3881bd46-6380-4e71-b1d6-0bd827423124',
      targetNodeId: 'da1056aa-fc8a-4ef6-9952-544bed1c2094',
      startPoint: {
        x: 550,
        y: 120,
      },
      endPoint: {
        x: 590,
        y: 120,
      },
      properties: {},
      pointsList: [
        {
          x: 550,
          y: 120,
        },
        {
          x: 580,
          y: 120,
        },
        {
          x: 580,
          y: 120,
        },
        {
          x: 560,
          y: 120,
        },
        {
          x: 560,
          y: 120,
        },
        {
          x: 590,
          y: 120,
        },
      ],
    },
    {
      id: '791bf926-131e-4691-bbf8-9a0fb67e99e8',
      type: 'polyline',
      sourceNodeId: 'da1056aa-fc8a-4ef6-9952-544bed1c2094',
      targetNodeId: 'f0afd931-458f-45ed-82f0-c26dfa5c7ad0',
      startPoint: {
        x: 690,
        y: 120,
      },
      endPoint: {
        x: 730,
        y: 120,
      },
      properties: {},
      pointsList: [
        {
          x: 690,
          y: 120,
        },
        {
          x: 720,
          y: 120,
        },
        {
          x: 720,
          y: 120,
        },
        {
          x: 700,
          y: 120,
        },
        {
          x: 700,
          y: 120,
        },
        {
          x: 730,
          y: 120,
        },
      ],
    },
    {
      id: '86462115-1fc8-44a0-9655-c1011ce2cec6',
      type: 'polyline',
      sourceNodeId: '1f0bc3e0-0186-44a8-9b93-7473ca01e194',
      targetNodeId: '1f7b787f-193e-4847-a5a3-3e73d560a5d2',
      startPoint: {
        x: 550,
        y: 240,
      },
      endPoint: {
        x: 590,
        y: 240,
      },
      properties: {},
      pointsList: [
        {
          x: 550,
          y: 240,
        },
        {
          x: 580,
          y: 240,
        },
        {
          x: 580,
          y: 240,
        },
        {
          x: 560,
          y: 240,
        },
        {
          x: 560,
          y: 240,
        },
        {
          x: 590,
          y: 240,
        },
      ],
    },
    {
      id: '20404f39-9f62-4a1e-b119-393dbe832b1f',
      type: 'polyline',
      sourceNodeId: '1f7b787f-193e-4847-a5a3-3e73d560a5d2',
      targetNodeId: '9d657e91-1074-4c12-99f1-e67b5768ba6f',
      startPoint: {
        x: 690,
        y: 240,
      },
      endPoint: {
        x: 730,
        y: 240,
      },
      properties: {},
      pointsList: [
        {
          x: 690,
          y: 240,
        },
        {
          x: 720,
          y: 240,
        },
        {
          x: 720,
          y: 240,
        },
        {
          x: 700,
          y: 240,
        },
        {
          x: 700,
          y: 240,
        },
        {
          x: 730,
          y: 240,
        },
      ],
    },
    {
      id: 'c9d5c047-4a73-474c-831e-bba4fea1c15e',
      type: 'polyline',
      sourceNodeId: 'f0afd931-458f-45ed-82f0-c26dfa5c7ad0',
      targetNodeId: '9d657e91-1074-4c12-99f1-e67b5768ba6f',
      startPoint: {
        x: 780,
        y: 160,
      },
      endPoint: {
        x: 780,
        y: 200,
      },
      properties: {},
      pointsList: [
        {
          x: 780,
          y: 160,
        },
        {
          x: 780,
          y: 190,
        },
        {
          x: 780,
          y: 190,
        },
        {
          x: 780,
          y: 170,
        },
        {
          x: 780,
          y: 170,
        },
        {
          x: 780,
          y: 200,
        },
      ],
    },
    {
      id: '071cfe01-7780-4ef4-bcfc-5dcb7ed17246',
      type: 'polyline',
      sourceNodeId: '9d657e91-1074-4c12-99f1-e67b5768ba6f',
      targetNodeId: 'a93a5154-37da-4449-8c73-75ce117a2642',
      startPoint: {
        x: 830,
        y: 240,
      },
      endPoint: {
        x: 870,
        y: 240,
      },
      properties: {},
      pointsList: [
        {
          x: 830,
          y: 240,
        },
        {
          x: 860,
          y: 240,
        },
        {
          x: 860,
          y: 240,
        },
        {
          x: 840,
          y: 240,
        },
        {
          x: 840,
          y: 240,
        },
        {
          x: 870,
          y: 240,
        },
      ],
    },
    {
      id: '50108781-1ea3-42b7-86ae-5cc185af8490',
      type: 'polyline',
      sourceNodeId: 'a93a5154-37da-4449-8c73-75ce117a2642',
      targetNodeId: '40943aae-d7a0-40c7-b715-5e6baa7331a4',
      startPoint: {
        x: 970,
        y: 240,
      },
      endPoint: {
        x: 1010,
        y: 240,
      },
      properties: {},
      pointsList: [
        {
          x: 970,
          y: 240,
        },
        {
          x: 1000,
          y: 240,
        },
        {
          x: 1000,
          y: 240,
        },
        {
          x: 980,
          y: 240,
        },
        {
          x: 980,
          y: 240,
        },
        {
          x: 1010,
          y: 240,
        },
      ],
    },
    {
      id: 'a644dac5-5c31-4498-95c9-86411d3f5676',
      type: 'polyline',
      sourceNodeId: '40943aae-d7a0-40c7-b715-5e6baa7331a4',
      targetNodeId: 'fb4ed2f5-4642-4e58-bb71-ccc2b43c6e5a',
      startPoint: {
        x: 1110,
        y: 240,
      },
      endPoint: {
        x: 1150,
        y: 240,
      },
      properties: {},
      pointsList: [
        {
          x: 1110,
          y: 240,
        },
        {
          x: 1140,
          y: 240,
        },
        {
          x: 1140,
          y: 240,
        },
        {
          x: 1120,
          y: 240,
        },
        {
          x: 1120,
          y: 240,
        },
        {
          x: 1150,
          y: 240,
        },
      ],
    },
    {
      id: 'e994e268-1897-432d-8028-db2cc23470e2',
      type: 'polyline',
      sourceNodeId: '7c08dcad-96f9-4761-a0f9-857f8efe2a09',
      targetNodeId: '1f0bc3e0-0186-44a8-9b93-7473ca01e194',
      startPoint: {
        x: 370,
        y: 182,
      },
      endPoint: {
        x: 500,
        y: 200,
      },
      properties: {},
      pointsList: [
        {
          x: 370,
          y: 182,
        },
        {
          x: 500,
          y: 182,
        },
        {
          x: 500,
          y: 200,
        },
      ],
    },
    {
      id: '17991fd6-b4ec-4143-ae9a-6273aeef1a05',
      type: 'polyline',
      sourceNodeId: 'fb4ed2f5-4642-4e58-bb71-ccc2b43c6e5a',
      targetNodeId: '53135fbd-c19c-4eee-9450-db6e0d2a9627',
      startPoint: {
        x: 1250,
        y: 240,
      },
      endPoint: {
        x: 1250,
        y: 380,
      },
      properties: {},
      text: {
        x: 1280,
        y: 312.1999969482422,
        value: 'No',
      },
      pointsList: [
        {
          x: 1250,
          y: 240,
        },
        {
          x: 1280,
          y: 240,
        },
        {
          x: 1280,
          y: 310,
        },
        {
          x: 1280,
          y: 310,
        },
        {
          x: 1280,
          y: 380,
        },
        {
          x: 1250,
          y: 380,
        },
      ],
    },
    {
      id: 'fc7a7ea9-03df-49e4-821d-56dba5ea270a',
      type: 'polyline',
      sourceNodeId: '53135fbd-c19c-4eee-9450-db6e0d2a9627',
      targetNodeId: '7145927e-3f87-4e9d-b058-99e10b476ec6',
      startPoint: {
        x: 1150,
        y: 380,
      },
      endPoint: {
        x: 1110,
        y: 380,
      },
      properties: {},
      pointsList: [
        {
          x: 1150,
          y: 380,
        },
        {
          x: 1120,
          y: 380,
        },
        {
          x: 1120,
          y: 380,
        },
        {
          x: 1140,
          y: 380,
        },
        {
          x: 1140,
          y: 380,
        },
        {
          x: 1110,
          y: 380,
        },
      ],
    },
    {
      id: '09a0c149-305f-4fd1-8e6b-dec32cfaedb6',
      type: 'polyline',
      sourceNodeId: '7145927e-3f87-4e9d-b058-99e10b476ec6',
      targetNodeId: '6b37ca8b-8520-4376-a4c5-6fda48ce3d81',
      startPoint: {
        x: 1010,
        y: 380,
      },
      endPoint: {
        x: 970,
        y: 380,
      },
      properties: {},
      pointsList: [
        {
          x: 1010,
          y: 380,
        },
        {
          x: 980,
          y: 380,
        },
        {
          x: 980,
          y: 380,
        },
        {
          x: 1000,
          y: 380,
        },
        {
          x: 1000,
          y: 380,
        },
        {
          x: 970,
          y: 380,
        },
      ],
    },
    {
      id: '102dcd82-bc29-4447-99ad-58b290bdc2ca',
      type: 'polyline',
      sourceNodeId: '6b37ca8b-8520-4376-a4c5-6fda48ce3d81',
      targetNodeId: '8398c903-e9ce-4f07-8831-a88a1effa6b1',
      startPoint: {
        x: 870,
        y: 380,
      },
      endPoint: {
        x: 830,
        y: 380,
      },
      properties: {},
      pointsList: [
        {
          x: 870,
          y: 380,
        },
        {
          x: 840,
          y: 380,
        },
        {
          x: 840,
          y: 380,
        },
        {
          x: 860,
          y: 380,
        },
        {
          x: 860,
          y: 380,
        },
        {
          x: 830,
          y: 380,
        },
      ],
    },
    {
      id: 'b3e0d6ab-f796-49dc-b934-951a5aa810af',
      type: 'polyline',
      sourceNodeId: '8398c903-e9ce-4f07-8831-a88a1effa6b1',
      targetNodeId: 'f8481669-541e-4eb6-9285-616388974c11',
      startPoint: {
        x: 730,
        y: 380,
      },
      endPoint: {
        x: 690,
        y: 380,
      },
      properties: {},
      pointsList: [
        {
          x: 730,
          y: 380,
        },
        {
          x: 700,
          y: 380,
        },
        {
          x: 700,
          y: 380,
        },
        {
          x: 720,
          y: 380,
        },
        {
          x: 720,
          y: 380,
        },
        {
          x: 690,
          y: 380,
        },
      ],
    },
    {
      id: 'ef671096-66d4-49ff-bc7c-d366f73f3b1b',
      type: 'polyline',
      sourceNodeId: 'f8481669-541e-4eb6-9285-616388974c11',
      targetNodeId: 'd2924a8d-498f-4098-8a5d-4bd0343c3a7b',
      startPoint: {
        x: 590,
        y: 380,
      },
      endPoint: {
        x: 130,
        y: 500,
      },
      properties: {},
      pointsList: [
        {
          x: 590,
          y: 380,
        },
        {
          x: 100,
          y: 380,
        },
        {
          x: 100,
          y: 500,
        },
        {
          x: 130,
          y: 500,
        },
      ],
    },
    {
      id: '8e295719-a346-449f-b3fb-b1b5664b9d46',
      type: 'polyline',
      sourceNodeId: 'f8481669-541e-4eb6-9285-616388974c11',
      targetNodeId: '808586f6-a7be-4378-8296-69c44f1e464a',
      startPoint: {
        x: 590,
        y: 380,
      },
      endPoint: {
        x: 130,
        y: 600,
      },
      properties: {},
      pointsList: [
        {
          x: 590,
          y: 380,
        },
        {
          x: 100,
          y: 380,
        },
        {
          x: 100,
          y: 600,
        },
        {
          x: 130,
          y: 600,
        },
      ],
    },
    {
      id: 'f95043ac-9ad7-477c-bef4-a498c9dc36c6',
      type: 'polyline',
      sourceNodeId: 'f8481669-541e-4eb6-9285-616388974c11',
      targetNodeId: 'e3a2ccdd-dcfc-4162-b049-7374cbd353f1',
      startPoint: {
        x: 590,
        y: 380,
      },
      endPoint: {
        x: 130,
        y: 700,
      },
      properties: {},
      pointsList: [
        {
          x: 590,
          y: 380,
        },
        {
          x: 100,
          y: 380,
        },
        {
          x: 100,
          y: 700,
        },
        {
          x: 130,
          y: 700,
        },
      ],
    },
    {
      id: 'd21bca2f-c9d2-4a27-a5e2-5f525c14a7ca',
      type: 'polyline',
      sourceNodeId: 'f8481669-541e-4eb6-9285-616388974c11',
      targetNodeId: '485de158-1d20-4576-9752-89bfdabd3fde',
      startPoint: {
        x: 590,
        y: 380,
      },
      endPoint: {
        x: 130,
        y: 800,
      },
      properties: {},
      text: {
        x: 331.015625,
        y: 380,
        value: 'Yes',
      },
      pointsList: [
        {
          x: 590,
          y: 380,
        },
        {
          x: 100,
          y: 380,
        },
        {
          x: 100,
          y: 800,
        },
        {
          x: 130,
          y: 800,
        },
      ],
    },
    {
      id: 'cd1887b1-57e5-454c-b7bf-e83502fe5b99',
      type: 'polyline',
      sourceNodeId: '0a963d00-054a-46ca-b24f-34a90751930a',
      targetNodeId: 'f62ed1ea-5e32-4ae4-8036-12cbd91e5f8b',
      startPoint: {
        x: 450,
        y: 580,
      },
      endPoint: {
        x: 510,
        y: 580,
      },
      properties: {},
      text: {
        x: 479.015625,
        y: 580,
        value: 'No',
      },
      pointsList: [
        {
          x: 450,
          y: 580,
        },
        {
          x: 510,
          y: 580,
        },
      ],
    },
    {
      id: 'd61bd672-2142-46aa-8797-63377c9ee714',
      type: 'polyline',
      sourceNodeId: '5d8a33ed-9ad8-4125-8033-f1d41d10ae07',
      targetNodeId: '53135fbd-c19c-4eee-9450-db6e0d2a9627',
      startPoint: {
        x: 450,
        y: 450,
      },
      endPoint: {
        x: 1200,
        y: 420,
      },
      properties: {},
      pointsList: [
        {
          x: 450,
          y: 450,
        },
        {
          x: 1200,
          y: 450,
        },
        {
          x: 1200,
          y: 420,
        },
      ],
    },
    {
      id: 'eb5cbfc9-69ba-4c34-9a27-f3717b370b55',
      type: 'polyline',
      sourceNodeId: 'f8481669-541e-4eb6-9285-616388974c11',
      targetNodeId: 'f62ed1ea-5e32-4ae4-8036-12cbd91e5f8b',
      startPoint: {
        x: 640,
        y: 430,
      },
      endPoint: {
        x: 560,
        y: 540,
      },
      properties: {},
      pointsList: [
        {
          x: 640,
          y: 430,
        },
        {
          x: 640,
          y: 485,
        },
        {
          x: 560,
          y: 485,
        },
        {
          x: 560,
          y: 540,
        },
      ],
    },
    {
      id: '18bb4aad-0269-4975-9de6-39f63244ba37',
      type: 'polyline',
      sourceNodeId: 'd2924a8d-498f-4098-8a5d-4bd0343c3a7b',
      targetNodeId: '0a963d00-054a-46ca-b24f-34a90751930a',
      startPoint: {
        x: 230,
        y: 500,
      },
      endPoint: {
        x: 350,
        y: 580,
      },
      properties: {},
      pointsList: [
        {
          x: 230,
          y: 500,
        },
        {
          x: 290,
          y: 500,
        },
        {
          x: 290,
          y: 580,
        },
        {
          x: 350,
          y: 580,
        },
      ],
    },
    {
      id: 'c8a7defd-a18e-4d8f-84a3-182141295537',
      type: 'polyline',
      sourceNodeId: '808586f6-a7be-4378-8296-69c44f1e464a',
      targetNodeId: '0a963d00-054a-46ca-b24f-34a90751930a',
      startPoint: {
        x: 230,
        y: 600,
      },
      endPoint: {
        x: 350,
        y: 580,
      },
      properties: {},
      pointsList: [
        {
          x: 230,
          y: 600,
        },
        {
          x: 290,
          y: 600,
        },
        {
          x: 290,
          y: 580,
        },
        {
          x: 350,
          y: 580,
        },
      ],
    },
    {
      id: '65e9000a-7401-4cc8-a8f3-a66931a12508',
      type: 'polyline',
      sourceNodeId: '0a963d00-054a-46ca-b24f-34a90751930a',
      targetNodeId: '5d8a33ed-9ad8-4125-8033-f1d41d10ae07',
      startPoint: {
        x: 400,
        y: 530,
      },
      endPoint: {
        x: 400,
        y: 480,
      },
      properties: {},
      pointsList: [
        {
          x: 400,
          y: 530,
        },
        {
          x: 400,
          y: 500,
        },
        {
          x: 400,
          y: 500,
        },
        {
          x: 400,
          y: 510,
        },
        {
          x: 400,
          y: 510,
        },
        {
          x: 400,
          y: 480,
        },
      ],
    },
    {
      id: 'b41b4e35-e4da-4b00-8c93-d969c66763df',
      type: 'polyline',
      sourceNodeId: 'f62ed1ea-5e32-4ae4-8036-12cbd91e5f8b',
      targetNodeId: 'c4fe91f1-c369-49eb-9d38-4fe8fb849264',
      startPoint: {
        x: 610,
        y: 580,
      },
      endPoint: {
        x: 670,
        y: 580,
      },
      properties: {},
      pointsList: [
        {
          x: 610,
          y: 580,
        },
        {
          x: 670,
          y: 580,
        },
      ],
    },
    {
      id: 'ee03f7d3-70ae-44b9-8ff4-11194667cfd1',
      type: 'polyline',
      sourceNodeId: 'c4fe91f1-c369-49eb-9d38-4fe8fb849264',
      targetNodeId: '1da0bf97-e312-4f5d-9a78-28e47c8b53ca',
      startPoint: {
        x: 770,
        y: 580,
      },
      endPoint: {
        x: 830,
        y: 580,
      },
      properties: {},
      pointsList: [
        {
          x: 770,
          y: 580,
        },
        {
          x: 830,
          y: 580,
        },
      ],
    },
    {
      id: '23b8ace4-acd5-4171-b9dc-0461a5f70a46',
      type: 'polyline',
      sourceNodeId: '1da0bf97-e312-4f5d-9a78-28e47c8b53ca',
      targetNodeId: 'a6971f7c-c33a-47bc-9510-d165de13e718',
      startPoint: {
        x: 930,
        y: 580,
      },
      endPoint: {
        x: 970,
        y: 580,
      },
      properties: {},
      pointsList: [
        {
          x: 930,
          y: 580,
        },
        {
          x: 960,
          y: 580,
        },
        {
          x: 960,
          y: 580,
        },
        {
          x: 940,
          y: 580,
        },
        {
          x: 940,
          y: 580,
        },
        {
          x: 970,
          y: 580,
        },
      ],
    },
    {
      id: '23d3eed1-7e82-4a8d-a509-a6bda22fac35',
      type: 'polyline',
      sourceNodeId: 'a6971f7c-c33a-47bc-9510-d165de13e718',
      targetNodeId: '399512d4-f919-4169-a1ec-3328699e502d',
      startPoint: {
        x: 1070,
        y: 580,
      },
      endPoint: {
        x: 1110,
        y: 580,
      },
      properties: {},
      pointsList: [
        {
          x: 1070,
          y: 580,
        },
        {
          x: 1100,
          y: 580,
        },
        {
          x: 1100,
          y: 580,
        },
        {
          x: 1080,
          y: 580,
        },
        {
          x: 1080,
          y: 580,
        },
        {
          x: 1110,
          y: 580,
        },
      ],
    },
    {
      id: '8d40b870-096e-4720-90bc-f58d8a0115c5',
      type: 'polyline',
      sourceNodeId: '399512d4-f919-4169-a1ec-3328699e502d',
      targetNodeId: '32c3c506-87d4-4078-86e6-8caa0bc75216',
      startPoint: {
        x: 1210,
        y: 580,
      },
      endPoint: {
        x: 1320,
        y: 650,
      },
      properties: {},
      pointsList: [
        {
          x: 1210,
          y: 580,
        },
        {
          x: 1320,
          y: 580,
        },
        {
          x: 1320,
          y: 650,
        },
      ],
    },
    {
      id: '90a8c08d-b091-4204-a28e-17345bda9645',
      type: 'polyline',
      sourceNodeId: 'e3a2ccdd-dcfc-4162-b049-7374cbd353f1',
      targetNodeId: '32c3c506-87d4-4078-86e6-8caa0bc75216',
      startPoint: {
        x: 230,
        y: 700,
      },
      endPoint: {
        x: 1270,
        y: 700,
      },
      properties: {},
      pointsList: [
        {
          x: 230,
          y: 700,
        },
        {
          x: 1270,
          y: 700,
        },
      ],
    },
    {
      id: '3f82fedc-d960-442c-984f-3ee24c9bd6f7',
      type: 'polyline',
      sourceNodeId: '485de158-1d20-4576-9752-89bfdabd3fde',
      targetNodeId: '32c3c506-87d4-4078-86e6-8caa0bc75216',
      startPoint: {
        x: 230,
        y: 800,
      },
      endPoint: {
        x: 1320,
        y: 750,
      },
      properties: {},
      pointsList: [
        {
          x: 230,
          y: 800,
        },
        {
          x: 1320,
          y: 800,
        },
        {
          x: 1320,
          y: 750,
        },
      ],
    },
    {
      id: 'd91444aa-f71c-448e-9d2f-c9f0b30d484b',
      type: 'polyline',
      sourceNodeId: '8077da5b-d952-4335-8595-c12f174c4ad7',
      targetNodeId: 'da1056aa-fc8a-4ef6-9952-544bed1c2094',
      startPoint: {
        x: 640,
        y: 40,
      },
      endPoint: {
        x: 640,
        y: 80,
      },
      properties: {},
      pointsList: [
        {
          x: 640,
          y: 40,
        },
        {
          x: 640,
          y: 70,
        },
        {
          x: 640,
          y: 70,
        },
        {
          x: 640,
          y: 50,
        },
        {
          x: 640,
          y: 50,
        },
        {
          x: 640,
          y: 80,
        },
      ],
    },
    {
      id: 'f15c32ee-00a4-4e6d-9d3f-5c012ac21da6',
      type: 'polyline',
      sourceNodeId: 'a93a5154-37da-4449-8c73-75ce117a2642',
      targetNodeId: '8077da5b-d952-4335-8595-c12f174c4ad7',
      startPoint: {
        x: 920,
        y: 200,
      },
      endPoint: {
        x: 690,
        y: 0,
      },
      properties: {},
      pointsList: [
        {
          x: 920,
          y: 200,
        },
        {
          x: 920,
          y: 0,
        },
        {
          x: 690,
          y: 0,
        },
      ],
    },
    {
      id: 'e2406be8-fbd9-4749-b38e-53333d25be5e',
      type: 'polyline',
      sourceNodeId: 'fb4ed2f5-4642-4e58-bb71-ccc2b43c6e5a',
      targetNodeId: '8077da5b-d952-4335-8595-c12f174c4ad7',
      startPoint: {
        x: 1200,
        y: 190,
      },
      endPoint: {
        x: 690,
        y: 0,
      },
      properties: {},
      text: {
        x: 1200,
        y: 108.015625,
        value: 'Yes',
      },
      pointsList: [
        {
          x: 1200,
          y: 190,
        },
        {
          x: 1200,
          y: 0,
        },
        {
          x: 690,
          y: 0,
        },
      ],
    },
  ],
};

export default data;
