import React from "react";
import {
  CheckCircleOutlined,
  CloseCircleOutlined,
  ExclamationCircleOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import {
  Button,
  DatePicker,
  Form,
  Input,
  Radio,
  Select,
  Spin,
  Table,
  Tag,
  Upload,
  message,
  notification,
  Breadcrumb,
  Skeleton,
  Card,
  Checkbox,
} from "antd";
import _ from "lodash";
import { Link, useNavigate } from "react-router-dom";
import { HiArrowNarrowLeft, HiSearch } from "react-icons/hi";
import Loader from "../../assets/loader.gif";

const { Option } = Select;

const normFile = (e) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

const formItemLayout = {
  labelCol: { span: 24 },
  wrapperCol: { span: 24 },
};
const FormItem = (props) => {
  const localFormStyle = props.formStyle || {};
  const hiddenStyle = props.hidden ? { height: 0, width: 0, margin: 0 } : {};
  const localStyle = props.overflowHidden
    ? { overflowX: "hidden", overflowY: "hidden", ...localFormStyle }
    : { ...localFormStyle };
  return (
    <Form.Item
      {...props}
      name={props.name}
      label={
        props.hidelabel ? null : (
          <span className="mb-0 h-3 text-xs text-[#212529]">{props.label}</span>
        )
      }
      valuePropName={props.valuePropName}
      validateFirst
      shouldUpdate={props.shouldUpdate}
      getValueFromEvent={props.getValueFromEvent}
      initialValue={
        props.initialValue ||
          typeof props.initialValue === "boolean" ||
          props.initialValue === "" ||
          props.initialValue === 0 ||
          Array.isArray(props.initialValue)
          ? props.initialValue
          : null
      }
      style={{ ...localStyle, ...hiddenStyle }}
      {...props.formItemProps}
      rules={props.localrules}
      {...formItemLayout}
      colon={props.colon || false}
      className={props.className}
    >
      {props.children}
    </Form.Item>
  );
};

const Inputs = (props) => {
  const handleWhiteSpaceValidation = (rules, value) => {
    if (value && typeof value !== "number") {
      if (value?.split("")?.[0] !== " ") {
        return Promise.resolve();
      } else {
        return Promise.reject(`${props.label} cannot start with space`);
      }
    } else {
      return Promise.resolve();
    }
  };

  const positiveNumberValidation = (rules, value) => {
    if (value) {
      if (value >= 0) {
        return Promise.resolve();
      } else {
        return Promise.reject(`${props.label} should be positive`);
      }
    } else {
      return Promise.resolve();
    }
  };
  const validatePhone = (_, value) => {
    const phoneRegex = /^\d{10}$/; // regular expression to validate phone number
    if (!phoneRegex.test(value)) {
      return Promise.reject('Please enter a valid phone number');
    } else if (value >= 0) {
      return Promise.resolve();
    } else if (value <= 0) {
      return Promise.reject(`${props.label} should be positive`);
    } else { return Promise.resolve() };
  };

  const emailPattern = {
    pattern: new RegExp("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$"),
    message: "Please enter in example@email.com format",
  };

  const whiteSpacePattern = {
    validator: handleWhiteSpaceValidation,
  };

  const positive = {
    validator: positiveNumberValidation,
  };
  const phonenumber = {
    validator: validatePhone
  }
  const pattern =
    props.type === "email" ? [emailPattern] : props.type === "pnumber" ? [phonenumber] : props.type === "number" ? [positive] : [whiteSpacePattern]

  const tempRule = [
    {
      required: props.required,
      message: (
        <div className="flex gap-1">
          <div>{"Please Enter"}</div>
          <div>{props.label}</div>
        </div>
      ),
    },
    ...pattern,
  ];

  const localrules =
    props.rules instanceof Array ? [...tempRule, ...props.rules] : tempRule;
  return (
    <FormItem {...props} localrules={localrules}>
      {!props.viewDetails || props.isfield ? (
        <Input
          min={props.minlength}
          hidden={props.hidden || false}
          type={props.type}
          onBlur={props.onBlur}
          autoFocus={false}
          style={{
            ...props.style,
          }}
          readOnly={props.readOnly}
          bordered={props.bordered ? false : true}
          onClick={props.onClick}
          maxLength={props.maxlength}
          value={props.value}
          disabled={props.disabled}
          onChange={props.onChange}
          className={props.className}
          allowClear={props.allowclear || false}
          prefix={props.prefix}
          suffix={props.type === "search" ? <HiSearch /> : props.suffix}
          placeholder={props.placeholder || `${props.label}`}
          {...props.fieldProps}
        />
      ) : (
        <div className="break flex justify-center break-words align-middle">
          <b>{props.initialValue || "-"}</b>
        </div>
      )}
    </FormItem>
  );
};

const Selects = (props) => {
  const tempRule = [
    {
      required: props.required,
      message: `Please select ${props.label}`,
    },
  ];

  const localrules =
    props.rules instanceof Array ? [...tempRule, ...props.rules] : tempRule;

  return (
    <FormItem {...props} localrules={localrules}>
      {props.isfield || props.initialValue instanceof Array ? (
        <Select
          mode={props.mode}
          dropdownStyle={props.dropdownstyle}
          showSearch={props.nosearch}
          onBlur={props.onBlur}
          autoFocus={false}
          onClick={props.onClick}
          disabled={props.disabled}
          onChange={props.onChange}
          clearIcon={null}
          onSelect={props.onSelect}
          optionFilterProp="children"
          className={props.className}
          allowClear={!props.noclear}
          loading={props.loading}
          notFoundContent={props.waitFor}
          dropdownRender={props.dropdownRender}
          placeholder={props.placeholder || `${props.label}`}
          style={{
            ...props.style,
          }}
          {...props.fieldProps}
        >
          {!_.isEmpty(props.array)
            ? _.isArray(props.array) &&
            props.array.map((item, index) => {
              return (
                <Option key={index} value={item[props.value]}>
                  {item[props.description]}
                </Option>
              );
            })
            : props.children}
        </Select>
      ) : (
        <div className="flex break-words text-center">
          <b>
            {props.array.find(
              (item) => item[props.value] === props.initialValue
            )?.[props.description] || "-"}
          </b>
        </div>
      )}
    </FormItem>
  );
};

const DatePickers = (props) => {
  const tempRule = [
    {
      required: props.required,
      message: `Please select ${props.label}`,
    },
  ];
  const localrules =
    props.rules instanceof Array ? [...tempRule, ...props.rules] : tempRule;

  return (
    <FormItem {...props} localrules={localrules}>
      <DatePicker
        {...props}
        onChange={props.onChange}
        className={props.className}
        format={props.format ? "YYYY-MM-DD HH:mm" : "YYYY-MM-DD"}
        disabled={props.disabled}
        mode={props.mode}
        suffixIcon={props.suffixIcon || null}
        style={{
          ...props.style,
        }}
      />
    </FormItem>
  );
};

const Tables = (props) => {
  const handlePaginationChange = (paginationData) =>
    props.setQueryParams instanceof Function &&
    props.setQueryParams({
      page: paginationData.current,
      limit: paginationData.pageSize,
    });
  return (
    <Table
      {...props}
      loading={{
        spinning: props.spinning,
        indicator: (
          <Spin
            indicator={
              <img src={Loader} style={{ width: "200px" }} alt="Loading.." />
            }
          />
        ),
      }}
      dataSource={props.data}
      columns={props.columns}
      expandable={props.expandable}
      onChange={handlePaginationChange}
      rowSelection={props.rowSelection || null}
      bordered={false}
      tableLayout="auto"
      scroll={{ x: `${props.X}`, scrollToFirstRowOnChange: true }}
      pagination={{
        current: props.current,
        pageSize: props.pazesize || 10,
        total: props.total,
      }}
      style={{ borderBottom: "none" }}
    />
  );
};

const notifications = (title, message, type) => {
  notification.open({
    message: (
      <span
        style={{
          color:
            type === "success"
              ? "#10c469"
              : type === "error"
                ? "red"
                : "#f2994a",
        }}
      >
        {title}!
      </span>
    ),
    description: message,
    icon:
      type === "success" ? (
        <CheckCircleOutlined style={{ color: "#10c469" }} />
      ) : type === "error" ? (
        <CloseCircleOutlined style={{ color: "red" }} />
      ) : (
        <ExclamationCircleOutlined style={{ color: "#f2994a" }} />
      ),
    placement: "topRight",
  });
};

const ImageUpload = (props) => {
  const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result));
    reader.readAsDataURL(img);
  };

  const beforeUpload = (file) => {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
      message.error("You can only upload JPG/PNG file!");
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error("Image must smaller than 2MB!");
    }
    return isJpgOrPng && isLt2M;
  };
  const [imageUrl, setImageUrl] = React.useState(null);
  const [updateImage, setUpdateImage] = React.useState(null);
  const tempRule = [
    {
      required: props.required,
      message: `Please select ${props.label}`,
    },
  ];
  const localrules =
    props.rules instanceof Array ? [...tempRule, ...props.rules] : tempRule;

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>

    </div>
  );

  const handleChange = (info) => {
    getBase64(info.file.originFileObj, (img) => {
      setUpdateImage(img);
      props.onChange instanceof Function && props.onChange(info, img);
    });
  };
  React.useEffect(() => {
    setImageUrl(props.initialimageurl);
  }, [props.initialimageurl]);

  return (
    <FormItem {...props} localrules={localrules}>
      <Upload
        name="avatar"
        listType="picture-circle"
        showUploadList={false}
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        beforeUpload={beforeUpload}
        onChange={handleChange}
        className={`h-${props.H} w-${props.W} `}
      >
        {imageUrl || updateImage ? (
          <img
            src={updateImage}
            alt="avatar"
            className={`h-${props.H} w-${props.W} max-w-full cursor-pointer overflow-hidden rounded-[50%] object-fill object-center`}
          />
        ) : (
          uploadButton
        )}
              {props.button ?
        <Button className="bg-main mt-5">{props.button}</Button> : ''
    }
      </Upload>
    </FormItem>
  );
};

const Passwords = (props) => {
  const {
    label,
    style,
    rules,
    onBlur,
    onClick,
    required,
    onChange,
    className,
    allowClear,
    validate,
  } = props;

  const lengthValidator = {
    validator: (rules, value) => {
      if (value?.length >= 8) {
        return Promise.resolve();
      } else {
        return Promise.reject(`Should be at least 8 characters long`);
      }
    },
  };

  const upperCaseValidator = {
    pattern: new RegExp("^(?=.*[A-Z]).+$"),
    message: "Should contain a uppercase alphabet",
  };

  const lowerCaseValidator = {
    pattern: new RegExp("^(?=.*[a-z]).+$"),
    message: "Should contain a lowercase alphabet",
  };

  const numberValidor = {
    pattern: new RegExp("^(?=.*[0-9]).+$"),
    message: "Should contain a number",
  };

  const specialChar = {
    pattern: new RegExp("^(?=.*[!@#$%^&*]).+$"),
    message: "Should contain a special character",
  };

  const tempRules = rules instanceof Array ? rules : [];
  const localrules =
    validate && required
      ? [
        ...tempRules,
        {
          required: required,
          message: "Please enter your password",
        },
        lowerCaseValidator,
        upperCaseValidator,
        numberValidor,
        specialChar,
        lengthValidator,
      ]
      : required
        ? [
          ...tempRules,
          {
            required: required,
            message: "Please enter your password",
          },
        ]
        : tempRules;

  return (
    <FormItem {...props} localrules={localrules}>
      <Input
        allowClear={allowClear}
        onBlur={onBlur}
        autoFocus={false}
        onClick={onClick}
        onChange={onChange}
        className={className}
        placeholder={label}
        autoComplete="new-password"
        prefix={props.prefix}
        style={{
          ...style,
        }}
        type="password"
      />
    </FormItem>
  );
};
const Buttons = (props) => {
  return (
    <Button
      size={props.size}
      htmlType={props.htmlType}
      onClick={props.onClick}
      className={props.className}
      loading={props.loading}
    >
      <div className="from-neutral-100 text-center text-xs font-normal flex items-center justify-center">
        {props.name}
      </div>
    </Button>
  );
};
const LinkButton = (props) => {
  return (
    <Link to={props.to}>
      <Tag
        icon={<HiArrowNarrowLeft className="mr-1" />}
        className=" bg-transparent  flex cursor-pointer items-center justify-center p-1 px-3"
      >
        {props.name}
      </Tag>
    </Link>
  );
};

const Header = (props) => {
  const navigate = useNavigate();

  return (
    <div className="m-auto mb-2 w-full grid grid-cols-3 items-center space-y-4 md:space-y-0">
      <div className="text-left">
        <Button onClick={() => navigate(-1)} className="text-dark">
          {props.name}
        </Button>
      </div>
      <div >
        <h5 className="text-primary text-center  text-base uppercase font-semibold mb-0">
          {props.currentmodule}
        </h5>
      </div>
      <div className="item-center flex justify-content-right">
        <Breadcrumb
          items={[
            {
              title: <Link to="/">{props.mainmodule}</Link>,
            },
            {
              title: <Link to="">{props.currentmodule}</Link>,
            },
          ]}
        />
      </div>
    </div>
  );
};

const FormLabel = (props) => {
  return (
    <div className="m-auto w-full grid grid-cols-3 items-center space-y-4 md:space-y-0 p-2 px-3 bg-gray-500">
      <div className="text-left">
        <h5 className="text-sm font-normal">{props.name}</h5>
      </div>
  
    </div>
  );
};



const CustomSkeleton = (props) => {
  return (
    <div>
      {
        props.loading ? (
          <div>
            {
              Array(props.value).fill().map((item, index) => (
                <div>
                  <div className={"md:grid grid-cols-2 flex gap-6 mb-10"}>
                    <div className="md:col-span-1">
                      <Skeleton
                        loading={props.loading}
                        avatar={props.avatar || null}
                        paragraph={{ rows: props.row }}
                      >
                        <div>
                          {props.children}

                        </div>
                      </Skeleton>
                    </div>
                    <div className="md:col-span-1">
                      <Skeleton
                        loading={props.loading}
                        avatar={props.avatar || null}
                        paragraph={{ rows: props.row }}
                      >
                      </Skeleton>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        ) : (
          <div>
            {props.children}
          </div>
        )
      }


    </div>


  );
};


const AntdCard = (props) => {
  return (
    <Card
      size="small"
      title={
        <div className=" grid grid-flow-row-dense grid-rows-1 py-2">
          <div className="flex justify-between items-center">
            <div className={`flex items-center gap-1 text-[${props.tc}]`}>
            {props.icon ||null}
            {props.title || null}
            </div>
            <div>
              {props.buttonType}
            </div>
          </div>
        
          <div className="text-xs font-medium text-slate-800 flex justify-start font-Poppins ">
            {props.subtitle ||null}
          </div>
        </div>
      }
      headStyle={{ backgroundColor: props.bg }}
    >
      {props.children}
    </Card>
  );
};
const Cards = (props) => {
  return (
    <Skeleton loading={props.loading}>
      <div className="grid rounded-md  border-inherit border-[1px] border-[#dee2e6]	gap:4 pt-2 mb-3 pb-2 bg-[#fafafa]">
        <div className="text-primary font-Poppins font-semibold cursor-pointer flex justify-start ml-4">
        {props.title || null}
        </div>
        <div>
        {props.children}

        </div>

          </div>
    </Skeleton>
    
  );
};


const AntdCheckbox = (props) => {

  const tempRule = [
    {
      required: props.required,
      message: `Please check ${props.placeholder}`,
    },
  ];

  const localrules =
    props.rules instanceof Array ? [...tempRule, ...props.rules] : tempRule;
  return (
    <FormItem {...props} valuePropName="checked" localrules={localrules}>
      <div className="flex items-center gap-0">
        {props.placeholder && <div className="mr-2 font-bold text-xs font-Poppins">{props.placeholder}</div>}
        <div className="flex gap-0 items-center">
          <Checkbox.Group>
  
          {props.options?.map((item) => (
          <div key={item.value}>
            <Checkbox value={item.value}>{item.option}</Checkbox>
          </div>
        ))}
          </Checkbox.Group>
        </div>
      </div>
    </FormItem>
  );
};

const AntRadio = (props) => {
  const [value, setValue] = React.useState(1);

  const OnChange = (e) => {
    setValue(e.target.value);
    props.handleRadioChange instanceof Function &&
      props.handleRadioChange(e.target.value);
  };
  const tempRule = [
    {
      required: props.required,
      message: `Please select ${props.label}`,
    },
  ];
  const localrules =
    props.rules instanceof Array ? [...tempRule, ...props.rules] : tempRule;
  return (
    <FormItem {...props} localrules={localrules}>

    <Radio.Group onChange={OnChange} value={value}>
      <div className="flex gap-0 items-center">
        {props.options?.map((item) => (
          <div key={item.value}>
            <Radio value={item.value}>{item.option}</Radio>
          </div>
        ))}
      </div>
    </Radio.Group>
    </FormItem>
  );
};

const Common = {
  LinkButton,
  Inputs,
  Selects,
  Buttons,
  Passwords,
  ImageUpload,
  notifications,
  Tables,
  DatePickers,
  normFile,
  AntRadio,
  Header,
  CustomSkeleton,
  AntdCard,
  FormLabel,
  Cards,
  AntdCheckbox
};
export default Common;
