const getprosTypeRadioInput = (language) => {
  switch (language) {
    case 'th': {
      return {
        title: 'Further options',
        header: {
          property: 'Property',
          type: 'Type',
          default: 'Default',
          description: 'Description',
        },
        detail: [
          {
            property: 'value',
            type: 'number',
            default: '""',
            description: 'ส่งมาเพื่อแสดงใน input',
          },
          {
            property: 'name',
            type: 'string',
            default: 'input',
            description: 'ชื่อของ field',
          },
          {
            property: 'label',
            type: 'string',
            default: '""',
            description: 'คำอธิบายของ input',
          },
          {
            property: 'options',
            type: 'array<object>',
            default: '',
            description: 'Ordered array of options to render.',
          },
          {
            property: 'type',
            type: 'string',
            default: 'text',
            description: 'ประเภทของ input',
          },
          {
            property: 'disabled',
            type: 'bool',
            default: 'false',
            description: 'disabled input',
          },
          {
            property: 'focus',
            type: 'bool',
            default: 'false',
            description: 'ให้ focus input',
          },
          // {
          //   property: 'rules',
          //   type: 'object',
          //   default: '',
          //   description: 'กดการ Verify input เช่น { required: "value is require." }',
          // },
          {
            property: 'onChange',
            type: 'function',
            default: '',
            description: 'function ที่ return value name errorMessage ทุกครั้งที่มีการเปลียนแปลงใน input',
          },
          {
            property: 'onBlur',
            type: 'function',
            default: '',
            description: 'function ที่ return value name errorMessage ทุกครั้งที่ lostfocus',
          },
          // {
          //   property: 'handleVerify',
          //   type: 'function',
          //   default: '',
          //   description: 'function customize verify input เช่น (value, rules) => "error message"',
          // },
          {
            property: 'children',
            type: 'any',
            default: '',
            description: 'สิ่งที่ต้องการแสดงเพิ่มเติม',
          },
        ],
      };
    }
    default:
      return {};
  }
};

export default getprosTypeRadioInput;
