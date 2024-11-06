import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { Link, useForm, Head, usePage, router, createInertiaApp } from "@inertiajs/react";
import * as React from "react";
import React__default, { forwardRef, useRef, useEffect, createContext, useState, useContext, memo } from "react";
import { Transition, Dialog, TransitionChild, DialogPanel } from "@headlessui/react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/16/solid";
import { FaFacebook, FaInstagram, FaSun, FaMoon, FaMapMarkerAlt } from "react-icons/fa";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Navbar, Timeline } from "flowbite-react";
import * as SwitchPrimitives from "@radix-ui/react-switch";
import { motion, useMotionValue, useSpring, useInView } from "framer-motion";
import { IoIosMail } from "react-icons/io";
import DOMPurify from "dompurify";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { HiCalendar } from "react-icons/hi";
import createServer from "@inertiajs/react/server";
import ReactDOMServer from "react-dom/server";
function Guest({ children }) {
  return /* @__PURE__ */ jsxs("div", { className: "flex min-h-screen flex-col items-center bg-gray-100 pt-6 sm:justify-center sm:pt-0", children: [
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(Link, { href: "/", children: /* @__PURE__ */ jsx(
      "img",
      {
        src: "/images/remida_logo.webp",
        className: "h-20 w-20 fill-current text-gray-500"
      }
    ) }) }),
    /* @__PURE__ */ jsx("div", { className: "mt-6 w-full overflow-hidden bg-white px-6 py-4 shadow-md sm:max-w-md sm:rounded-lg", children })
  ] });
}
function InputError({ message, className = "", ...props }) {
  return message ? /* @__PURE__ */ jsx("p", { ...props, className: "text-sm text-red-600 " + className, children: message }) : null;
}
function InputLabel({ value, className = "", children, ...props }) {
  return /* @__PURE__ */ jsx("label", { ...props, className: `block font-medium text-sm text-gray-700 ` + className, children: value ? value : children });
}
function PrimaryButton({ className = "", disabled, children, ...props }) {
  return /* @__PURE__ */ jsx(
    "button",
    {
      ...props,
      className: `inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150 ${disabled && "opacity-25"} ` + className,
      disabled,
      children
    }
  );
}
const TextInput = forwardRef(function TextInput2({ type = "text", className = "", isFocused = false, ...props }, ref) {
  const input = ref ? ref : useRef();
  useEffect(() => {
    if (isFocused) {
      input.current.focus();
    }
  }, []);
  return /* @__PURE__ */ jsx(
    "input",
    {
      ...props,
      type,
      className: "border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm " + className,
      ref: input
    }
  );
});
function ConfirmPassword() {
  const { data, setData, post, processing, errors, reset } = useForm({
    password: ""
  });
  const submit = (e) => {
    e.preventDefault();
    post(route("password.confirm"), {
      onFinish: () => reset("password")
    });
  };
  return /* @__PURE__ */ jsxs(Guest, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Confirm Password" }),
    /* @__PURE__ */ jsx("div", { className: "mb-4 text-sm text-gray-600", children: "This is a secure area of the application. Please confirm your password before continuing." }),
    /* @__PURE__ */ jsxs("form", { onSubmit: submit, children: [
      /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "password", value: "Password" }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "password",
            type: "password",
            name: "password",
            value: data.password,
            className: "mt-1 block w-full",
            isFocused: true,
            onChange: (e) => setData("password", e.target.value)
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.password, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex items-center justify-end mt-4", children: /* @__PURE__ */ jsx(PrimaryButton, { className: "ms-4", disabled: processing, children: "Confirm" }) })
    ] })
  ] });
}
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ConfirmPassword
}, Symbol.toStringTag, { value: "Module" }));
function ForgotPassword({ status }) {
  const { data, setData, post, processing, errors } = useForm({
    email: ""
  });
  const submit = (e) => {
    e.preventDefault();
    post(route("password.email"));
  };
  return /* @__PURE__ */ jsxs(Guest, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Forgot Password" }),
    /* @__PURE__ */ jsx("div", { className: "mb-4 text-sm text-gray-600", children: "Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one." }),
    status && /* @__PURE__ */ jsx("div", { className: "mb-4 font-medium text-sm text-green-600", children: status }),
    /* @__PURE__ */ jsxs("form", { onSubmit: submit, children: [
      /* @__PURE__ */ jsx(
        TextInput,
        {
          id: "email",
          type: "email",
          name: "email",
          value: data.email,
          className: "mt-1 block w-full",
          isFocused: true,
          onChange: (e) => setData("email", e.target.value)
        }
      ),
      /* @__PURE__ */ jsx(InputError, { message: errors.email, className: "mt-2" }),
      /* @__PURE__ */ jsx("div", { className: "flex items-center justify-end mt-4", children: /* @__PURE__ */ jsx(PrimaryButton, { className: "ms-4", disabled: processing, children: "Email Password Reset Link" }) })
    ] })
  ] });
}
const __vite_glob_0_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ForgotPassword
}, Symbol.toStringTag, { value: "Module" }));
function Checkbox({ className = "", ...props }) {
  return /* @__PURE__ */ jsx(
    "input",
    {
      ...props,
      type: "checkbox",
      className: "rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500 " + className
    }
  );
}
function Login({ status, canResetPassword }) {
  const { data, setData, post, processing, errors, reset } = useForm({
    email: "",
    password: "",
    remember: false
  });
  const submit = (e) => {
    e.preventDefault();
    post(route("login"), {
      onFinish: () => reset("password")
    });
  };
  return /* @__PURE__ */ jsxs(Guest, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Log in" }),
    status && /* @__PURE__ */ jsx("div", { className: "mb-4 font-medium text-sm text-green-600", children: status }),
    /* @__PURE__ */ jsxs("form", { onSubmit: submit, children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "email", value: "Email" }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "email",
            type: "email",
            name: "email",
            value: data.email,
            className: "mt-1 block w-full",
            autoComplete: "username",
            isFocused: true,
            onChange: (e) => setData("email", e.target.value)
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.email, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "password", value: "Password" }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "password",
            type: "password",
            name: "password",
            value: data.password,
            className: "mt-1 block w-full",
            autoComplete: "current-password",
            onChange: (e) => setData("password", e.target.value)
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.password, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "block mt-4", children: /* @__PURE__ */ jsxs("label", { className: "flex items-center", children: [
        /* @__PURE__ */ jsx(
          Checkbox,
          {
            name: "remember",
            checked: data.remember,
            onChange: (e) => setData("remember", e.target.checked)
          }
        ),
        /* @__PURE__ */ jsx("span", { className: "ms-2 text-sm text-gray-600", children: "Remember me" })
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-end mt-4", children: [
        canResetPassword && /* @__PURE__ */ jsx(
          Link,
          {
            href: route("password.request"),
            className: "underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
            children: "Forgot your password?"
          }
        ),
        /* @__PURE__ */ jsx(PrimaryButton, { className: "ms-4", disabled: processing, children: "Log in" })
      ] })
    ] })
  ] });
}
const __vite_glob_0_2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Login
}, Symbol.toStringTag, { value: "Module" }));
function ResetPassword({ token, email }) {
  const { data, setData, post, processing, errors, reset } = useForm({
    token,
    email,
    password: "",
    password_confirmation: ""
  });
  const submit = (e) => {
    e.preventDefault();
    post(route("password.store"), {
      onFinish: () => reset("password", "password_confirmation")
    });
  };
  return /* @__PURE__ */ jsxs(Guest, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Reset Password" }),
    /* @__PURE__ */ jsxs("form", { onSubmit: submit, children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "email", value: "Email" }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "email",
            type: "email",
            name: "email",
            value: data.email,
            className: "mt-1 block w-full",
            autoComplete: "username",
            onChange: (e) => setData("email", e.target.value)
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.email, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "password", value: "Password" }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "password",
            type: "password",
            name: "password",
            value: data.password,
            className: "mt-1 block w-full",
            autoComplete: "new-password",
            isFocused: true,
            onChange: (e) => setData("password", e.target.value)
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.password, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "password_confirmation", value: "Confirm Password" }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            type: "password",
            id: "password_confirmation",
            name: "password_confirmation",
            value: data.password_confirmation,
            className: "mt-1 block w-full",
            autoComplete: "new-password",
            onChange: (e) => setData("password_confirmation", e.target.value)
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.password_confirmation, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex items-center justify-end mt-4", children: /* @__PURE__ */ jsx(PrimaryButton, { className: "ms-4", disabled: processing, children: "Reset Password" }) })
    ] })
  ] });
}
const __vite_glob_0_3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ResetPassword
}, Symbol.toStringTag, { value: "Module" }));
function VerifyEmail({ status }) {
  const { post, processing } = useForm({});
  const submit = (e) => {
    e.preventDefault();
    post(route("verification.send"));
  };
  return /* @__PURE__ */ jsxs(Guest, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Email Verification" }),
    /* @__PURE__ */ jsx("div", { className: "mb-4 text-sm text-gray-600", children: "Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another." }),
    status === "verification-link-sent" && /* @__PURE__ */ jsx("div", { className: "mb-4 font-medium text-sm text-green-600", children: "A new verification link has been sent to the email address you provided during registration." }),
    /* @__PURE__ */ jsx("form", { onSubmit: submit, children: /* @__PURE__ */ jsxs("div", { className: "mt-4 flex items-center justify-between", children: [
      /* @__PURE__ */ jsx(PrimaryButton, { disabled: processing, children: "Resend Verification Email" }),
      /* @__PURE__ */ jsx(
        Link,
        {
          href: route("logout"),
          method: "post",
          as: "button",
          className: "underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
          children: "Log Out"
        }
      )
    ] }) })
  ] });
}
const __vite_glob_0_4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: VerifyEmail
}, Symbol.toStringTag, { value: "Module" }));
function ButtonLink({
  children,
  light = false,
  className = "",
  ...props
}) {
  return /* @__PURE__ */ jsx(
    Link,
    {
      ...props,
      className: `mt-5 inline-block rounded-3xl px-6 py-3 shadow-md transition-colors dark:bg-black dark:text-white dark:hover:bg-gray-900 ${light ? "bg-white text-black hover:bg-gray-200" : "bg-black text-white hover:bg-gray-900"} ${className}`,
      children
    }
  );
}
const DropDownContext = createContext();
const Dropdown = ({ children }) => {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => {
    setOpen((previousState) => !previousState);
  };
  return /* @__PURE__ */ jsx(DropDownContext.Provider, { value: { open, setOpen, toggleOpen }, children: /* @__PURE__ */ jsx("div", { className: "relative", children }) });
};
const Trigger = ({ children }) => {
  const { open, setOpen, toggleOpen } = useContext(DropDownContext);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("div", { onClick: toggleOpen, children }),
    open && /* @__PURE__ */ jsx("div", { className: "fixed inset-0 z-40", onClick: () => setOpen(false) })
  ] });
};
const Content = ({ align = "right", width = "48", contentClasses = "py-1 bg-white", children }) => {
  const { open, setOpen } = useContext(DropDownContext);
  let alignmentClasses = "origin-top";
  if (align === "left") {
    alignmentClasses = "ltr:origin-top-left rtl:origin-top-right start-0";
  } else if (align === "right") {
    alignmentClasses = "ltr:origin-top-right rtl:origin-top-left end-0";
  }
  let widthClasses = "";
  if (width === "48") {
    widthClasses = "w-48";
  }
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(
    Transition,
    {
      show: open,
      enter: "transition ease-out duration-200",
      enterFrom: "opacity-0 scale-95",
      enterTo: "opacity-100 scale-100",
      leave: "transition ease-in duration-75",
      leaveFrom: "opacity-100 scale-100",
      leaveTo: "opacity-0 scale-95",
      children: /* @__PURE__ */ jsx(
        "div",
        {
          className: `absolute z-50 mt-2 rounded-md shadow-lg ${alignmentClasses} ${widthClasses}`,
          onClick: () => setOpen(false),
          children: /* @__PURE__ */ jsx("div", { className: `rounded-md ring-1 ring-black ring-opacity-5 ` + contentClasses, children })
        }
      )
    }
  ) });
};
const DropdownLink = ({ className = "", children, ...props }) => {
  return /* @__PURE__ */ jsx(
    Link,
    {
      ...props,
      className: "block w-full px-4 py-2 text-start text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out " + className,
      children
    }
  );
};
Dropdown.Trigger = Trigger;
Dropdown.Content = Content;
Dropdown.Link = DropdownLink;
function NavLink({ active = false, className = "", children, ...props }) {
  return /* @__PURE__ */ jsx(
    Link,
    {
      ...props,
      className: "inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium leading-5 transition duration-150 ease-in-out focus:outline-none " + (active ? "border-indigo-400 text-gray-900 focus:border-indigo-700 " : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:text-gray-700 focus:border-gray-300 ") + className,
      children
    }
  );
}
function ResponsiveNavLink({ active = false, className = "", children, ...props }) {
  return /* @__PURE__ */ jsx(
    Link,
    {
      ...props,
      className: `w-full flex items-start ps-3 pe-4 py-2 border-l-4 ${active ? "border-indigo-400 text-indigo-700 bg-indigo-50 focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700" : "border-transparent text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300"} text-base font-medium focus:outline-none transition duration-150 ease-in-out ${className}`,
      children
    }
  );
}
function Authenticated({ user, header, children }) {
  const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gray-100", children: [
    /* @__PURE__ */ jsxs("nav", { className: "border-b border-gray-100 bg-white", children: [
      /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "flex h-16 justify-between", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex", children: [
          /* @__PURE__ */ jsx("div", { className: "flex shrink-0 items-center", children: /* @__PURE__ */ jsx(Link, { href: route("dashboard"), children: /* @__PURE__ */ jsx(
            "img",
            {
              src: "/images/remida_logo.webp",
              className: "h-16 w-16 fill-current p-2 text-gray-500"
            }
          ) }) }),
          /* @__PURE__ */ jsx("div", { className: "hidden space-x-8 sm:-my-px sm:ms-10 sm:flex", children: /* @__PURE__ */ jsx(
            NavLink,
            {
              href: route("dashboard"),
              active: route().current("dashboard"),
              children: "Dashboard"
            }
          ) }),
          /* @__PURE__ */ jsx("div", { className: "hidden space-x-8 sm:-my-px sm:ms-10 sm:flex", children: /* @__PURE__ */ jsx(
            NavLink,
            {
              href: route("event.index"),
              active: route().current("event.index"),
              children: "Eventi"
            }
          ) }),
          /* @__PURE__ */ jsx("div", { className: "hidden space-x-8 sm:-my-px sm:ms-10 sm:flex", children: /* @__PURE__ */ jsx(
            NavLink,
            {
              href: route("image.index"),
              active: route().current("image.index"),
              children: "Immagini"
            }
          ) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "hidden sm:ms-6 sm:flex sm:items-center", children: /* @__PURE__ */ jsx("div", { className: "relative ms-3", children: /* @__PURE__ */ jsxs(Dropdown, { children: [
          /* @__PURE__ */ jsx(Dropdown.Trigger, { children: /* @__PURE__ */ jsx("span", { className: "inline-flex rounded-md", children: /* @__PURE__ */ jsxs(
            "button",
            {
              type: "button",
              className: "inline-flex items-center rounded-md border border-transparent bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition duration-150 ease-in-out hover:text-gray-700 focus:outline-none",
              children: [
                user.name,
                /* @__PURE__ */ jsx(
                  "svg",
                  {
                    className: "-me-0.5 ms-2 h-4 w-4",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 20 20",
                    fill: "currentColor",
                    children: /* @__PURE__ */ jsx(
                      "path",
                      {
                        fillRule: "evenodd",
                        d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
                        clipRule: "evenodd"
                      }
                    )
                  }
                )
              ]
            }
          ) }) }),
          /* @__PURE__ */ jsxs(Dropdown.Content, { children: [
            /* @__PURE__ */ jsx(
              Dropdown.Link,
              {
                href: route("profile.edit"),
                children: "Profile"
              }
            ),
            /* @__PURE__ */ jsx(
              Dropdown.Link,
              {
                href: route("logout"),
                method: "post",
                as: "button",
                children: "Log Out"
              }
            )
          ] })
        ] }) }) }),
        /* @__PURE__ */ jsx("div", { className: "-me-2 flex items-center sm:hidden", children: /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => setShowingNavigationDropdown(
              (previousState) => !previousState
            ),
            className: "inline-flex items-center justify-center rounded-md p-2 text-gray-400 transition duration-150 ease-in-out hover:bg-gray-100 hover:text-gray-500 focus:bg-gray-100 focus:text-gray-500 focus:outline-none",
            children: /* @__PURE__ */ jsxs(
              "svg",
              {
                className: "h-6 w-6",
                stroke: "currentColor",
                fill: "none",
                viewBox: "0 0 24 24",
                children: [
                  /* @__PURE__ */ jsx(
                    "path",
                    {
                      className: !showingNavigationDropdown ? "inline-flex" : "hidden",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: "2",
                      d: "M4 6h16M4 12h16M4 18h16"
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    "path",
                    {
                      className: showingNavigationDropdown ? "inline-flex" : "hidden",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: "2",
                      d: "M6 18L18 6M6 6l12 12"
                    }
                  )
                ]
              }
            )
          }
        ) })
      ] }) }),
      /* @__PURE__ */ jsxs(
        "div",
        {
          className: (showingNavigationDropdown ? "block" : "hidden") + " sm:hidden",
          children: [
            /* @__PURE__ */ jsx("div", { className: "space-y-1 pb-3 pt-2", children: /* @__PURE__ */ jsx(
              ResponsiveNavLink,
              {
                href: route("dashboard"),
                active: route().current("dashboard"),
                children: "Dashboard"
              }
            ) }),
            /* @__PURE__ */ jsxs("div", { className: "border-t border-gray-200 pb-1 pt-4", children: [
              /* @__PURE__ */ jsxs("div", { className: "px-4", children: [
                /* @__PURE__ */ jsx("div", { className: "text-base font-medium text-gray-800", children: user.name }),
                /* @__PURE__ */ jsx("div", { className: "text-sm font-medium text-gray-500", children: user.email })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "mt-3 space-y-1", children: [
                /* @__PURE__ */ jsx(ResponsiveNavLink, { href: route("profile.edit"), children: "Profile" }),
                /* @__PURE__ */ jsx(
                  ResponsiveNavLink,
                  {
                    method: "post",
                    href: route("logout"),
                    as: "button",
                    children: "Log Out"
                  }
                )
              ] })
            ] })
          ]
        }
      )
    ] }),
    header && /* @__PURE__ */ jsx("header", { className: "bg-white shadow", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8", children: header }) }),
    /* @__PURE__ */ jsx("main", { children })
  ] });
}
function Dashboard({ auth }) {
  return /* @__PURE__ */ jsxs(
    Authenticated,
    {
      user: auth.user,
      header: /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold leading-tight text-gray-800", children: "Dashboard" }),
      children: [
        /* @__PURE__ */ jsx(Head, { title: "Dashboard" }),
        /* @__PURE__ */ jsx("div", { className: "py-12", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-5 overflow-hidden bg-white p-5 shadow-sm sm:rounded-lg", children: [
          /* @__PURE__ */ jsxs("div", { className: "space-y-5 rounded-lg border border-gray-400 bg-gray-300 p-6 text-center text-gray-900 shadow-lg", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-2xl", children: "Eventi" }),
            /* @__PURE__ */ jsx("p", { children: "Crea, Aggiorna ed Elimina Eventi" }),
            /* @__PURE__ */ jsx(ButtonLink, { href: route("event.index"), children: "Vai" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-5 rounded-lg border border-gray-400 bg-gray-300 p-6 text-center text-gray-900 shadow-lg", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-2xl", children: "Gallery" }),
            /* @__PURE__ */ jsx("p", { children: "Crea, Aggiorna ed Elimina Immagini dalla Gallery" }),
            /* @__PURE__ */ jsx(ButtonLink, { href: route("image.index"), children: "Vai" })
          ] })
        ] }) }) })
      ]
    }
  );
}
const __vite_glob_0_5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Dashboard
}, Symbol.toStringTag, { value: "Module" }));
const SelectInput = forwardRef(function SelectInput2({ className = "", children, ...props }, ref) {
  const input = ref ? ref : useRef();
  return /* @__PURE__ */ jsx(
    "select",
    {
      ...props,
      className: "rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-indigo-600 dark:focus:ring-indigo-600 " + className,
      ref: input,
      children
    }
  );
});
function Create$3({ auth }) {
  const { data, setData, post, errors, processing } = useForm({
    image: "",
    title: "",
    status: "",
    description: ""
  });
  const onSubmit = (e) => {
    e.preventDefault();
    post(route("event.store"));
  };
  return /* @__PURE__ */ jsxs(
    Authenticated,
    {
      user: auth.user,
      header: /* @__PURE__ */ jsx("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200", children: "Crea un Nuovo Evento" }) }),
      children: [
        /* @__PURE__ */ jsx(Head, { title: "Creazione Evento" }),
        /* @__PURE__ */ jsx("div", { className: "py-12", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl sm:px-6 lg:px-8", children: /* @__PURE__ */ jsx("div", { className: "overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800", children: /* @__PURE__ */ jsxs(
          "form",
          {
            onSubmit,
            className: "bg-white p-4 shadow sm:rounded-lg sm:p-8 dark:bg-gray-800",
            encType: "multipart/form-data",
            children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx(
                  InputLabel,
                  {
                    htmlFor: "event_image_path",
                    value: "Immagine Evento (Max 2MB)"
                  }
                ),
                /* @__PURE__ */ jsx(
                  TextInput,
                  {
                    id: "event_image_path",
                    type: "file",
                    name: "image",
                    className: "mt-1 block w-full",
                    onChange: (e) => setData("image", e.target.files[0])
                  }
                ),
                /* @__PURE__ */ jsx(
                  InputError,
                  {
                    message: errors.image,
                    className: "mt-2"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
                /* @__PURE__ */ jsx(
                  InputLabel,
                  {
                    htmlFor: "event_title",
                    value: "Titolo Evento"
                  }
                ),
                /* @__PURE__ */ jsx(
                  TextInput,
                  {
                    id: "event_title",
                    type: "text",
                    name: "name",
                    value: data.title,
                    className: "mt-1 block w-full",
                    isFocused: true,
                    onChange: (e) => setData("title", e.target.value)
                  }
                ),
                /* @__PURE__ */ jsx(
                  InputError,
                  {
                    message: errors.title,
                    className: "mt-2"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
                /* @__PURE__ */ jsx(
                  InputLabel,
                  {
                    htmlFor: "event_description",
                    value: "Descrizione Evento"
                  }
                ),
                /* @__PURE__ */ jsx(
                  CKEditor,
                  {
                    editor: ClassicEditor,
                    data: data.description,
                    onChange: (event, editor) => {
                      const data2 = editor.getData();
                      setData("description", data2);
                    }
                  }
                ),
                /* @__PURE__ */ jsx(
                  InputError,
                  {
                    message: errors.description,
                    className: "mt-2"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
                /* @__PURE__ */ jsx(
                  InputLabel,
                  {
                    htmlFor: "event_status",
                    value: "Status Evento"
                  }
                ),
                /* @__PURE__ */ jsxs(
                  SelectInput,
                  {
                    name: "status",
                    id: "event_status",
                    className: "mt-1 block w-full",
                    onChange: (e) => setData("status", e.target.value),
                    children: [
                      /* @__PURE__ */ jsx("option", { value: "", children: "Seleziona lo Stato" }),
                      /* @__PURE__ */ jsx("option", { value: "published", children: "Pubblicato" }),
                      /* @__PURE__ */ jsx("option", { value: "unpublished", children: "Non Pubblicato" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsx(
                  InputError,
                  {
                    message: errors.status,
                    className: "mt-2"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "mt-4 text-right", children: [
                /* @__PURE__ */ jsx(
                  Link,
                  {
                    href: route("event.index"),
                    className: "mr-2 rounded bg-gray-100 px-3 py-1 text-gray-800 shadow transition-all hover:bg-gray-200",
                    children: "Annulla"
                  }
                ),
                /* @__PURE__ */ jsx(
                  "button",
                  {
                    disabled: processing,
                    className: "rounded bg-emerald-500 px-3 py-1 text-white shadow transition-all hover:bg-emerald-600",
                    children: "Crea"
                  }
                )
              ] })
            ]
          }
        ) }) }) })
      ]
    }
  );
}
const __vite_glob_0_6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Create$3
}, Symbol.toStringTag, { value: "Module" }));
function Create$2({ auth, event }) {
  const { data, setData, post, errors, processing, clearErrors } = useForm({
    image: "",
    title: event.data.title || "",
    status: event.data.status || "",
    description: event.data.description || "",
    _method: "PUT"
  });
  const onSubmit = (e) => {
    e.preventDefault();
    clearErrors();
    post(route("event.update", event.data.id), {
      ...data
    });
  };
  return /* @__PURE__ */ jsxs(
    Authenticated,
    {
      user: auth.user,
      header: /* @__PURE__ */ jsx("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ jsxs("h2", { className: "text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200", children: [
        `Modifica l'evento "`,
        event.data.title,
        '"'
      ] }) }),
      children: [
        /* @__PURE__ */ jsx(Head, { title: "Creazione Evento" }),
        /* @__PURE__ */ jsx("div", { className: "py-12", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl sm:px-6 lg:px-8", children: /* @__PURE__ */ jsx("div", { className: "overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800", children: /* @__PURE__ */ jsxs(
          "form",
          {
            onSubmit,
            className: "bg-white p-4 shadow sm:rounded-lg sm:p-8 dark:bg-gray-800",
            encType: "multipart/form-data",
            children: [
              event.data.image_url && /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
                "img",
                {
                  src: event.data.image_url,
                  alt: event.data.title,
                  className: "mb-5 w-64 rounded-lg shadow-lg"
                }
              ) }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx(
                  InputLabel,
                  {
                    htmlFor: "event_image_path",
                    value: "Immagine Evento (Max 2MB)"
                  }
                ),
                /* @__PURE__ */ jsx(
                  TextInput,
                  {
                    id: "event_image_path",
                    type: "file",
                    name: "image",
                    className: "mt-1 block w-full",
                    onChange: (e) => setData("image", e.target.files[0])
                  }
                ),
                /* @__PURE__ */ jsx(
                  InputError,
                  {
                    message: errors.image,
                    className: "mt-2"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
                /* @__PURE__ */ jsx(
                  InputLabel,
                  {
                    htmlFor: "event_title",
                    value: "Titolo Evento"
                  }
                ),
                /* @__PURE__ */ jsx(
                  TextInput,
                  {
                    id: "event_title",
                    type: "text",
                    name: "name",
                    value: data.title,
                    className: "mt-1 block w-full",
                    isFocused: true,
                    onChange: (e) => setData("title", e.target.value)
                  }
                ),
                /* @__PURE__ */ jsx(
                  InputError,
                  {
                    message: errors.title,
                    className: "mt-2"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
                /* @__PURE__ */ jsx(
                  InputLabel,
                  {
                    htmlFor: "event_description",
                    value: "Descrizione Evento"
                  }
                ),
                /* @__PURE__ */ jsx(
                  CKEditor,
                  {
                    editor: ClassicEditor,
                    data: data.description,
                    onChange: (event2, editor) => {
                      const data2 = editor.getData();
                      setData("description", data2);
                    }
                  }
                ),
                /* @__PURE__ */ jsx(
                  InputError,
                  {
                    message: errors.description,
                    className: "mt-2"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
                /* @__PURE__ */ jsx(
                  InputLabel,
                  {
                    htmlFor: "event_status",
                    value: "Status Evento"
                  }
                ),
                /* @__PURE__ */ jsxs(
                  SelectInput,
                  {
                    name: "status",
                    id: "event_status",
                    className: "mt-1 block w-full",
                    onChange: (e) => setData("status", e.target.value),
                    children: [
                      /* @__PURE__ */ jsx("option", { value: "", children: "Seleziona lo Stato" }),
                      /* @__PURE__ */ jsx(
                        "option",
                        {
                          selected: event.data.status === "published",
                          value: "published",
                          children: "Pubblicato"
                        }
                      ),
                      /* @__PURE__ */ jsx(
                        "option",
                        {
                          selected: event.data.status === "unpublished",
                          value: "unpublished",
                          children: "Non Pubblicato"
                        }
                      )
                    ]
                  }
                ),
                /* @__PURE__ */ jsx(
                  InputError,
                  {
                    message: errors.status,
                    className: "mt-2"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "mt-4 text-right", children: [
                /* @__PURE__ */ jsx(
                  Link,
                  {
                    href: route("event.index"),
                    className: "mr-2 rounded bg-gray-100 px-3 py-1 text-gray-800 shadow transition-all hover:bg-gray-200",
                    children: "Annulla"
                  }
                ),
                /* @__PURE__ */ jsx(
                  "button",
                  {
                    disabled: processing,
                    className: "rounded bg-emerald-500 px-3 py-1 text-white shadow transition-all hover:bg-emerald-600",
                    children: "Aggiorna"
                  }
                )
              ] })
            ]
          }
        ) }) }) })
      ]
    }
  );
}
const __vite_glob_0_7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Create$2
}, Symbol.toStringTag, { value: "Module" }));
function Pagination({ links }) {
  return /* @__PURE__ */ jsx("nav", { className: "mt-4 text-center", children: links.map((link, _) => /* @__PURE__ */ jsx(
    Link,
    {
      preserveScroll: true,
      href: link.url || "",
      dangerouslySetInnerHTML: { __html: link.label },
      className: `inline-block rounded-lg px-3 py-2 text-xs text-gray-700 ${link.active ? "bg-gray-950 text-white" : ""} ${!link.url ? "cursor-not-allowed !text-gray-300" : "transition-colors hover:bg-gray-600 hover:text-white"}`
    },
    _
  )) });
}
const THeadSorting = memo(function THeadSorting2({
  sortChanged = () => {
  },
  sortField = null,
  sortDirection = null,
  sortable = true,
  name,
  children
}) {
  const isSortedAsc = sortField === name && sortDirection === "asc";
  const isSortedDesc = sortField === name && sortDirection === "desc";
  return /* @__PURE__ */ jsx("th", { onClick: (e) => sortChanged(name), children: /* @__PURE__ */ jsxs(
    "div",
    {
      className: `px-3 py-3 ${sortable && "flex cursor-pointer items-center justify-between gap-1"}`,
      children: [
        children,
        sortable && /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(
            ChevronUpIcon,
            {
              className: `w-4 ${isSortedAsc ? "text-green-500" : "text-gray-400"}`
            }
          ),
          /* @__PURE__ */ jsx(
            ChevronDownIcon,
            {
              className: `-mt-2 w-4 ${isSortedDesc ? "text-green-500" : "text-gray-400"}`
            }
          )
        ] })
      ]
    }
  ) });
});
const variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1.5 }
  }
};
const EVENT_STATUS_CLASS_MAP = {
  unpublished: "bg-red-500 ",
  published: "bg-green-500"
};
const EVENT_STATUS_TEXT_MAP = {
  unpublished: "Non Pubblicato",
  published: "Pubblicato"
};
const COLLABORATION_ARRAY = [
  {
    title: "Comune di Caronno Pertusella",
    description: "2024."
  },
  {
    title: "British College Gallarate e Fagnano",
    description: "2024."
  },
  {
    title: "bam",
    description: "Biblioteca degli Alberi di Milano 2024."
  },
  {
    title: "Comune di vCarese",
    description: "Manifestazione Reseed 2012."
  },
  {
    title: "Comune di Busto Arsizio",
    description: "Tappa del giro d'Italia 2012 e RiParty."
  },
  {
    title: "Comune di Gazzada Schianno",
    description: "Manifestazione InterKommunale 2012."
  },
  {
    title: "Comune di Laveno Mombello",
    description: "Museo Midec di Cerro"
  },
  {
    title: "Comune di Albizzate",
    description: "Manifestazione RiusiAMO Albizzate"
  },
  {
    title: "Comune di Comerio",
    description: "Festival di MicroCosmi"
  },
  {
    title: "Comune di Oggiona Santo Stefano",
    description: "Festival O.S.A."
  },
  {
    title: "Comune di Cernobbio",
    description: "Manifestazione Family@work 2013"
  },
  {
    title: "Join Research Center UE di Ispra",
    description: "Open Day 2013"
  },
  {
    title: "Oratorio di Masnago - Varese",
    description: "Palio dei Rioni 2012"
  },
  {
    title: "Cascina Cuccagna - Milano",
    description: "Fuori Salone del Mobile 2013 - Evento 'Oggi domani ieri'"
  },
  {
    title: "e ancora:",
    description: "Comune di Angera, Comune di Besozzo, Comune di Luino, Comune di Casale Litta, Comune di Leggiuno, Comune di Inarzo, Parco Regionale del Campo dei Fiori, Parco Regionale Pineta"
  }
];
function Index$1({ auth, events, queryParams = null }) {
  const { flash } = usePage().props;
  queryParams = queryParams || {};
  const searchFieldChanged = (title, value) => {
    if (value) {
      queryParams[title] = value;
    } else {
      delete queryParams[title];
    }
    router.get(route("event.index"), queryParams);
  };
  const onKeyPress = (name, e) => {
    if (e.key !== "Enter") return;
    searchFieldChanged(name, e.target.value);
  };
  const sortChanged = (name) => {
    if (name === queryParams.sort_field) {
      if (queryParams.sort_direction === "asc") {
        queryParams.sort_direction = "desc";
      } else {
        queryParams.sort_direction = "asc";
      }
    } else {
      queryParams.sort_field = name;
      queryParams.sort_direction = "asc";
    }
    router.get(route("event.index"), queryParams);
  };
  const deleteEvent = (event) => {
    if (!window.confirm("Sei sicuro di voler eliminare l'evento?")) {
      return;
    }
    router.delete(route("event.destroy", event.id));
  };
  return /* @__PURE__ */ jsxs(
    Authenticated,
    {
      user: auth.user,
      header: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200", children: "Eventi" }),
        /* @__PURE__ */ jsx(
          Link,
          {
            href: route("event.create"),
            className: "rounded bg-emerald-500 px-3 py-2 text-white shadow transition-all hover:bg-emerald-600",
            children: "Crea Nuovo Evento"
          }
        )
      ] }),
      children: [
        /* @__PURE__ */ jsx(Head, { title: "Eventi" }),
        /* @__PURE__ */ jsx("div", { className: "py-12", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800", children: [
          flash.message && /* @__PURE__ */ jsx("div", { className: "m-5 rounded-lg bg-emerald-500 p-5 text-center text-white", children: flash.message }),
          /* @__PURE__ */ jsxs("div", { className: "p-6 text-gray-900 dark:text-gray-100", children: [
            /* @__PURE__ */ jsx("div", { className: "overflow-auto", children: /* @__PURE__ */ jsxs("table", { className: "w-full text-left text-sm text-gray-500 rtl:text-right dark:text-gray-400", children: [
              /* @__PURE__ */ jsx("thead", { className: "border-b-2 border-gray-500 bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400", children: /* @__PURE__ */ jsxs("tr", { className: "text-nowrap", children: [
                /* @__PURE__ */ jsx(
                  THeadSorting,
                  {
                    sortChanged,
                    sortField: queryParams.sort_field,
                    name: "id",
                    sortDirection: queryParams.sort_direction,
                    children: "ID"
                  }
                ),
                /* @__PURE__ */ jsx(
                  THeadSorting,
                  {
                    sortChanged,
                    sortField: queryParams.sort_field,
                    name: "title",
                    sortDirection: queryParams.sort_direction,
                    children: "TITOLO"
                  }
                ),
                /* @__PURE__ */ jsx(
                  THeadSorting,
                  {
                    sortChanged,
                    sortField: queryParams.sort_field,
                    name: "description",
                    sortDirection: queryParams.sort_direction,
                    children: "DESCRIZIONE"
                  }
                ),
                /* @__PURE__ */ jsx(
                  THeadSorting,
                  {
                    sortChanged,
                    sortField: queryParams.sort_field,
                    name: "status",
                    sortDirection: queryParams.sort_direction,
                    children: "STATUS"
                  }
                ),
                /* @__PURE__ */ jsx(
                  THeadSorting,
                  {
                    sortChanged,
                    sortField: queryParams.sort_field,
                    name: "created_at",
                    sortDirection: queryParams.sort_direction,
                    children: "CREATO IL"
                  }
                ),
                /* @__PURE__ */ jsx(
                  THeadSorting,
                  {
                    sortable: false,
                    className: "text-center",
                    children: "AZIONI"
                  }
                )
              ] }) }),
              /* @__PURE__ */ jsx("thead", { className: "border-b-2 border-gray-500 bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400", children: /* @__PURE__ */ jsxs("tr", { className: "text-nowrap", children: [
                /* @__PURE__ */ jsx("th", { className: "px-3 py-3" }),
                /* @__PURE__ */ jsx("th", { className: "px-3 py-3" }),
                /* @__PURE__ */ jsx("th", { className: "px-3 py-3", children: /* @__PURE__ */ jsx(
                  TextInput,
                  {
                    className: "w-full",
                    defaultValue: queryParams.title,
                    placeholder: "Titolo Evento",
                    onBlur: (e) => searchFieldChanged(
                      "title",
                      e.target.value
                    ),
                    onKeyPress: (e) => onKeyPress("title", e)
                  }
                ) }),
                /* @__PURE__ */ jsx("th", { className: "px-3 py-3", children: /* @__PURE__ */ jsxs(
                  SelectInput,
                  {
                    className: "w-full",
                    defaultValue: queryParams.status,
                    onChange: (e) => searchFieldChanged(
                      "status",
                      e.target.value
                    ),
                    children: [
                      /* @__PURE__ */ jsx("option", { value: "", children: "Seleziona lo Status" }),
                      /* @__PURE__ */ jsx("option", { value: "published", children: "Pubblicato" }),
                      /* @__PURE__ */ jsx("option", { value: "unpublished", children: "Non Pubblicato" })
                    ]
                  }
                ) }),
                /* @__PURE__ */ jsx("th", { className: "px-3 py-3" }),
                /* @__PURE__ */ jsx("th", { className: "px-3 py-3" }),
                /* @__PURE__ */ jsx("th", { className: "px-3 py-3" }),
                /* @__PURE__ */ jsx("th", { className: "px-3 py-2" })
              ] }) }),
              events.data.length === 0 && /* @__PURE__ */ jsx("tbody", { children: /* @__PURE__ */ jsx("tr", { children: /* @__PURE__ */ jsx(
                "td",
                {
                  colSpan: "7",
                  className: "py-5 text-center text-xl",
                  children: "Non Sono Ancora Presenti Eventi"
                }
              ) }) }),
              events && /* @__PURE__ */ jsx("tbody", { children: events.data.map((event) => /* @__PURE__ */ jsxs(
                "tr",
                {
                  className: "border-b bg-white dark:border-gray-700 dark:bg-gray-800",
                  children: [
                    /* @__PURE__ */ jsx("td", { className: "px-3 py-3", children: event.id }),
                    /* @__PURE__ */ jsx("td", { className: "px-3 py-3", children: event.title }),
                    /* @__PURE__ */ jsxs("td", { className: "px-3 py-3", children: [
                      event.description.substring(
                        0,
                        50
                      ),
                      " ",
                      "..."
                    ] }),
                    /* @__PURE__ */ jsx("td", { className: "px-3 py-3", children: /* @__PURE__ */ jsx(
                      "span",
                      {
                        className: `rounded px-2 py-1 text-white ${EVENT_STATUS_CLASS_MAP[event.status]}`,
                        children: EVENT_STATUS_TEXT_MAP[event.status]
                      }
                    ) }),
                    /* @__PURE__ */ jsx("td", { className: "px-3 py-3", children: event.created_at }),
                    /* @__PURE__ */ jsxs("td", { className: "text-nowrap px-3 py-3", children: [
                      /* @__PURE__ */ jsx(
                        Link,
                        {
                          href: route(
                            "event.edit",
                            event.id
                          ),
                          className: "mx-1 font-medium text-blue-600 hover:underline dark:text-blue-500",
                          children: "Modifica"
                        }
                      ),
                      /* @__PURE__ */ jsx(
                        "button",
                        {
                          onClick: (ev) => deleteEvent(
                            event
                          ),
                          className: "mx-1 font-medium text-red-600 hover:underline dark:text-red-500",
                          children: "Elimina"
                        }
                      )
                    ] })
                  ]
                },
                event.id
              )) })
            ] }) }),
            /* @__PURE__ */ jsx(Pagination, { links: events.meta.links })
          ] })
        ] }) }) })
      ]
    }
  );
}
const __vite_glob_0_8 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Index$1
}, Symbol.toStringTag, { value: "Module" }));
function Create$1({ auth }) {
  const { flash } = usePage().props;
  const { data, setData, post, reset, errors, processing } = useForm({
    image: "",
    title: ""
  });
  const onSubmit = (e) => {
    e.preventDefault();
    post(route("image.store"), {
      onSuccess: () => {
        reset("image", "title");
      }
    });
  };
  return /* @__PURE__ */ jsxs(
    Authenticated,
    {
      user: auth.user,
      header: /* @__PURE__ */ jsx("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200", children: "Aggiungi una Nuova Immagine" }) }),
      children: [
        /* @__PURE__ */ jsx(Head, { title: "Creazione Immagine" }),
        /* @__PURE__ */ jsx("div", { className: "py-12", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800", children: [
          flash.message && /* @__PURE__ */ jsx("div", { className: "m-5 rounded-lg bg-emerald-500 p-5 text-center text-white", children: flash.message }),
          /* @__PURE__ */ jsxs(
            "form",
            {
              onSubmit,
              className: "bg-white p-4 shadow sm:rounded-lg sm:p-8 dark:bg-gray-800",
              encType: "multipart/form-data",
              children: [
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx(
                    InputLabel,
                    {
                      htmlFor: "image_path",
                      value: "Immagine (Max 2MB)"
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    TextInput,
                    {
                      id: "image_path",
                      type: "file",
                      name: "image",
                      className: "mt-1 block w-full",
                      onChange: (e) => setData("image", e.target.files[0])
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    InputError,
                    {
                      message: errors.image,
                      className: "mt-2"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
                  /* @__PURE__ */ jsx(
                    InputLabel,
                    {
                      htmlFor: "image_title",
                      value: "Titolo"
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    TextInput,
                    {
                      id: "image_title",
                      type: "text",
                      name: "title",
                      value: data.title,
                      className: "mt-1 block w-full",
                      isFocused: true,
                      onChange: (e) => setData("title", e.target.value)
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    InputError,
                    {
                      message: errors.title,
                      className: "mt-2"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "mt-4 text-right", children: [
                  /* @__PURE__ */ jsx(
                    Link,
                    {
                      href: route("image.index"),
                      className: "mr-2 rounded bg-gray-100 px-3 py-1 text-gray-800 shadow transition-all hover:bg-gray-200",
                      children: "Annulla"
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    "button",
                    {
                      disabled: processing,
                      type: "submit",
                      className: "rounded bg-emerald-500 px-3 py-1 text-white shadow transition-all hover:bg-emerald-600",
                      children: "Crea"
                    }
                  )
                ] })
              ]
            }
          )
        ] }) }) })
      ]
    }
  );
}
const __vite_glob_0_9 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Create$1
}, Symbol.toStringTag, { value: "Module" }));
function Create({ auth, image }) {
  const { data, setData, post, errors, processing, clearErrors } = useForm({
    image: "",
    title: image.data.title || "",
    _method: "PUT"
  });
  console.log(image);
  const onSubmit = (e) => {
    e.preventDefault();
    clearErrors();
    post(route("image.update", image.data.id), {
      ...data
    });
  };
  return /* @__PURE__ */ jsxs(
    Authenticated,
    {
      user: auth.user,
      header: /* @__PURE__ */ jsx("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ jsxs("h2", { className: "text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200", children: [
        `Modifica l'immagine "`,
        image.data.title,
        '"'
      ] }) }),
      children: [
        /* @__PURE__ */ jsx(Head, { title: "Creazione Evento" }),
        /* @__PURE__ */ jsx("div", { className: "py-12", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl sm:px-6 lg:px-8", children: /* @__PURE__ */ jsx("div", { className: "overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800", children: /* @__PURE__ */ jsxs(
          "form",
          {
            onSubmit,
            className: "bg-white p-4 shadow sm:rounded-lg sm:p-8 dark:bg-gray-800",
            encType: "multipart/form-data",
            children: [
              image.data.src && /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
                "img",
                {
                  src: image.data.src,
                  alt: image.data.title,
                  className: "mb-5 w-64 rounded-lg shadow-lg"
                }
              ) }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx(
                  InputLabel,
                  {
                    htmlFor: "event_image_path",
                    value: "Immagine (Max 2MB)"
                  }
                ),
                /* @__PURE__ */ jsx(
                  TextInput,
                  {
                    id: "image_path",
                    type: "file",
                    name: "image",
                    className: "mt-1 block w-full",
                    onChange: (e) => setData("image", e.target.files[0])
                  }
                ),
                /* @__PURE__ */ jsx(
                  InputError,
                  {
                    message: errors.image,
                    className: "mt-2"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
                /* @__PURE__ */ jsx(InputLabel, { htmlFor: "title", value: "Titolo" }),
                /* @__PURE__ */ jsx(
                  TextInput,
                  {
                    id: "title",
                    type: "text",
                    name: "title",
                    value: data.title,
                    className: "mt-1 block w-full",
                    isFocused: true,
                    onChange: (e) => setData("title", e.target.value)
                  }
                ),
                /* @__PURE__ */ jsx(
                  InputError,
                  {
                    message: errors.title,
                    className: "mt-2"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "mt-4 text-right", children: [
                /* @__PURE__ */ jsx(
                  Link,
                  {
                    href: route("image.index"),
                    className: "mr-2 rounded bg-gray-100 px-3 py-1 text-gray-800 shadow transition-all hover:bg-gray-200",
                    children: "Annulla"
                  }
                ),
                /* @__PURE__ */ jsx(
                  "button",
                  {
                    disabled: processing,
                    className: "rounded bg-emerald-500 px-3 py-1 text-white shadow transition-all hover:bg-emerald-600",
                    children: "Aggiorna"
                  }
                )
              ] })
            ]
          }
        ) }) }) })
      ]
    }
  );
}
const __vite_glob_0_10 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Create
}, Symbol.toStringTag, { value: "Module" }));
function Index({ auth, images }) {
  const { flash } = usePage().props;
  const deleteEvent = (image) => {
    if (!window.confirm("Sei sicuro di voler eliminare l'immagine?")) {
      return;
    }
    router.delete(route("image.destroy", image.id));
  };
  return /* @__PURE__ */ jsxs(
    Authenticated,
    {
      user: auth.user,
      header: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200", children: "Immagini" }),
        /* @__PURE__ */ jsx(
          Link,
          {
            href: route("image.create"),
            className: "rounded bg-emerald-500 px-3 py-2 text-white shadow transition-all hover:bg-emerald-600",
            children: "Aggiungi Nuova Immagine"
          }
        )
      ] }),
      children: [
        /* @__PURE__ */ jsx(Head, { title: "Immagini" }),
        /* @__PURE__ */ jsx("div", { className: "py-12", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800", children: [
          flash.message && /* @__PURE__ */ jsx("div", { className: "m-5 rounded-lg bg-emerald-500 p-5 text-center text-white", children: flash.message }),
          /* @__PURE__ */ jsxs("div", { className: "p-6 text-gray-900 dark:text-gray-100", children: [
            /* @__PURE__ */ jsx("div", { className: "overflow-auto", children: /* @__PURE__ */ jsxs("table", { className: "w-full text-left text-sm text-gray-500 rtl:text-right dark:text-gray-400", children: [
              /* @__PURE__ */ jsx("thead", { className: "border-b-2 border-gray-500 bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400", children: /* @__PURE__ */ jsxs("tr", { className: "text-nowrap", children: [
                /* @__PURE__ */ jsx(THeadSorting, { sortable: false, children: "ID" }),
                /* @__PURE__ */ jsx(THeadSorting, { sortable: false, children: "IMMAGINE" }),
                /* @__PURE__ */ jsx(THeadSorting, { sortable: false, children: "TITOLO" }),
                /* @__PURE__ */ jsx(THeadSorting, { sortable: false, children: "CREATO IL" }),
                /* @__PURE__ */ jsx(
                  THeadSorting,
                  {
                    sortable: false,
                    className: "text-center",
                    children: "AZIONI"
                  }
                )
              ] }) }),
              images.data.length === 0 && /* @__PURE__ */ jsx("tbody", { children: /* @__PURE__ */ jsx("tr", { children: /* @__PURE__ */ jsx(
                "td",
                {
                  colSpan: "6",
                  className: "py-5 text-center text-xl",
                  children: "Non Sono Ancora Presenti Immagini"
                }
              ) }) }),
              images && /* @__PURE__ */ jsx("tbody", { children: images.data.map((image) => /* @__PURE__ */ jsxs(
                "tr",
                {
                  className: "border-b bg-white dark:border-gray-700 dark:bg-gray-800",
                  children: [
                    /* @__PURE__ */ jsx("td", { className: "px-3 py-3", children: image.id }),
                    /* @__PURE__ */ jsx("td", { className: "px-3 py-3", children: /* @__PURE__ */ jsx(
                      "img",
                      {
                        className: "h-20 w-20 object-cover",
                        src: image.src
                      }
                    ) }),
                    /* @__PURE__ */ jsx("td", { className: "px-3 py-3", children: image.title }),
                    /* @__PURE__ */ jsx("td", { className: "px-3 py-3", children: image.created_at }),
                    /* @__PURE__ */ jsxs("td", { className: "text-nowrap px-3 py-3", children: [
                      /* @__PURE__ */ jsx(
                        Link,
                        {
                          href: route(
                            "image.edit",
                            image.id
                          ),
                          className: "mx-1 font-medium text-blue-600 hover:underline dark:text-blue-500",
                          children: "Modifica"
                        }
                      ),
                      /* @__PURE__ */ jsx(
                        "button",
                        {
                          onClick: (ev) => deleteEvent(
                            image
                          ),
                          className: "mx-1 font-medium text-red-600 hover:underline dark:text-red-500",
                          children: "Elimina"
                        }
                      )
                    ] })
                  ]
                },
                image.id
              )) })
            ] }) }),
            /* @__PURE__ */ jsx(Pagination, { links: images.meta.links })
          ] })
        ] }) }) })
      ]
    }
  );
}
const __vite_glob_0_11 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Index
}, Symbol.toStringTag, { value: "Module" }));
function DangerButton({ className = "", disabled, children, ...props }) {
  return /* @__PURE__ */ jsx(
    "button",
    {
      ...props,
      className: `inline-flex items-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-500 active:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition ease-in-out duration-150 ${disabled && "opacity-25"} ` + className,
      disabled,
      children
    }
  );
}
function Modal({ children, show = false, maxWidth = "2xl", closeable = true, onClose = () => {
} }) {
  const close = () => {
    if (closeable) {
      onClose();
    }
  };
  const maxWidthClass = {
    sm: "sm:max-w-sm",
    md: "sm:max-w-md",
    lg: "sm:max-w-lg",
    xl: "sm:max-w-xl",
    "2xl": "sm:max-w-2xl"
  }[maxWidth];
  return /* @__PURE__ */ jsx(Transition, { show, leave: "duration-200", children: /* @__PURE__ */ jsxs(
    Dialog,
    {
      as: "div",
      id: "modal",
      className: "fixed inset-0 flex overflow-y-auto px-4 py-6 sm:px-0 items-center z-50 transform transition-all",
      onClose: close,
      children: [
        /* @__PURE__ */ jsx(
          TransitionChild,
          {
            enter: "ease-out duration-300",
            enterFrom: "opacity-0",
            enterTo: "opacity-100",
            leave: "ease-in duration-200",
            leaveFrom: "opacity-100",
            leaveTo: "opacity-0",
            children: /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gray-500/75" })
          }
        ),
        /* @__PURE__ */ jsx(
          TransitionChild,
          {
            enter: "ease-out duration-300",
            enterFrom: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
            enterTo: "opacity-100 translate-y-0 sm:scale-100",
            leave: "ease-in duration-200",
            leaveFrom: "opacity-100 translate-y-0 sm:scale-100",
            leaveTo: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
            children: /* @__PURE__ */ jsx(
              DialogPanel,
              {
                className: `mb-6 bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:w-full sm:mx-auto ${maxWidthClass}`,
                children
              }
            )
          }
        )
      ]
    }
  ) });
}
function SecondaryButton({ type = "button", className = "", disabled, children, ...props }) {
  return /* @__PURE__ */ jsx(
    "button",
    {
      ...props,
      type,
      className: `inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md font-semibold text-xs text-gray-700 uppercase tracking-widest shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150 ${disabled && "opacity-25"} ` + className,
      disabled,
      children
    }
  );
}
function DeleteUserForm({ className = "" }) {
  const [confirmingUserDeletion, setConfirmingUserDeletion] = useState(false);
  const passwordInput = useRef();
  const {
    data,
    setData,
    delete: destroy,
    processing,
    reset,
    errors
  } = useForm({
    password: ""
  });
  const confirmUserDeletion = () => {
    setConfirmingUserDeletion(true);
  };
  const deleteUser = (e) => {
    e.preventDefault();
    destroy(route("profile.destroy"), {
      preserveScroll: true,
      onSuccess: () => closeModal(),
      onError: () => passwordInput.current.focus(),
      onFinish: () => reset()
    });
  };
  const closeModal = () => {
    setConfirmingUserDeletion(false);
    reset();
  };
  return /* @__PURE__ */ jsxs("section", { className: `space-y-6 ${className}`, children: [
    /* @__PURE__ */ jsxs("header", { children: [
      /* @__PURE__ */ jsx("h2", { className: "text-lg font-medium text-gray-900", children: "Cancella Account" }),
      /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-gray-600", children: "Una volta cancellato, tutti i tuoi dati e risorse verranno permanentemente cancellati. Prima di cancellare il tuo account, ti consigliamo di scaricare i dati o le informazioni che desideri conservare." })
    ] }),
    /* @__PURE__ */ jsx(DangerButton, { onClick: confirmUserDeletion, children: "Cancella Account" }),
    /* @__PURE__ */ jsx(Modal, { show: confirmingUserDeletion, onClose: closeModal, children: /* @__PURE__ */ jsxs("form", { onSubmit: deleteUser, className: "p-6", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-lg font-medium text-gray-900", children: "Sei sicuro di voler cancellare il tuo account?" }),
      /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-gray-600", children: "Una volta cancellato, tutti i tuoi dati e risorse verranno permanentemente cancellati. Inserisci la tua password per confermare che desideri cancellare il tuo account permanentemente." }),
      /* @__PURE__ */ jsxs("div", { className: "mt-6", children: [
        /* @__PURE__ */ jsx(
          InputLabel,
          {
            htmlFor: "password",
            value: "Password",
            className: "sr-only"
          }
        ),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "password",
            type: "password",
            name: "password",
            ref: passwordInput,
            value: data.password,
            onChange: (e) => setData("password", e.target.value),
            className: "mt-1 block w-3/4",
            isFocused: true,
            placeholder: "Password"
          }
        ),
        /* @__PURE__ */ jsx(
          InputError,
          {
            message: errors.password,
            className: "mt-2"
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-6 flex justify-end", children: [
        /* @__PURE__ */ jsx(SecondaryButton, { onClick: closeModal, children: "Annulla" }),
        /* @__PURE__ */ jsx(DangerButton, { className: "ms-3", disabled: processing, children: "Cancella Account" })
      ] })
    ] }) })
  ] });
}
const __vite_glob_0_13 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: DeleteUserForm
}, Symbol.toStringTag, { value: "Module" }));
function UpdatePasswordForm({ className = "" }) {
  const passwordInput = useRef();
  const currentPasswordInput = useRef();
  const {
    data,
    setData,
    errors,
    put,
    reset,
    processing,
    recentlySuccessful
  } = useForm({
    current_password: "",
    password: "",
    password_confirmation: ""
  });
  const updatePassword = (e) => {
    e.preventDefault();
    put(route("password.update"), {
      preserveScroll: true,
      onSuccess: () => reset(),
      onError: (errors2) => {
        if (errors2.password) {
          reset("password", "password_confirmation");
          passwordInput.current.focus();
        }
        if (errors2.current_password) {
          reset("current_password");
          currentPasswordInput.current.focus();
        }
      }
    });
  };
  return /* @__PURE__ */ jsxs("section", { className, children: [
    /* @__PURE__ */ jsxs("header", { children: [
      /* @__PURE__ */ jsx("h2", { className: "text-lg font-medium text-gray-900", children: "Aggiorna la Password" }),
      /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-gray-600", children: "Assicurati di utilizzare una password lunga e casuale per mantenere la tua sicurezza." })
    ] }),
    /* @__PURE__ */ jsxs("form", { onSubmit: updatePassword, className: "mt-6 space-y-6", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(
          InputLabel,
          {
            htmlFor: "current_password",
            value: "Password Corrente"
          }
        ),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "current_password",
            ref: currentPasswordInput,
            value: data.current_password,
            onChange: (e) => setData("current_password", e.target.value),
            type: "password",
            className: "mt-1 block w-full",
            autoComplete: "current-password"
          }
        ),
        /* @__PURE__ */ jsx(
          InputError,
          {
            message: errors.current_password,
            className: "mt-2"
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "password", value: "Nuova Password" }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "password",
            ref: passwordInput,
            value: data.password,
            onChange: (e) => setData("password", e.target.value),
            type: "password",
            className: "mt-1 block w-full",
            autoComplete: "new-password"
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.password, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(
          InputLabel,
          {
            htmlFor: "password_confirmation",
            value: "Conferma Password"
          }
        ),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "password_confirmation",
            value: data.password_confirmation,
            onChange: (e) => setData("password_confirmation", e.target.value),
            type: "password",
            className: "mt-1 block w-full",
            autoComplete: "new-password"
          }
        ),
        /* @__PURE__ */ jsx(
          InputError,
          {
            message: errors.password_confirmation,
            className: "mt-2"
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ jsx(PrimaryButton, { disabled: processing, children: "Salva" }),
        /* @__PURE__ */ jsx(
          Transition,
          {
            show: recentlySuccessful,
            enter: "transition ease-in-out",
            enterFrom: "opacity-0",
            leave: "transition ease-in-out",
            leaveTo: "opacity-0",
            children: /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: "Saved." })
          }
        )
      ] })
    ] })
  ] });
}
const __vite_glob_0_14 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: UpdatePasswordForm
}, Symbol.toStringTag, { value: "Module" }));
function UpdateProfileInformation({
  mustVerifyEmail,
  status,
  className = ""
}) {
  const user = usePage().props.auth.user;
  const { data, setData, patch, errors, processing, recentlySuccessful } = useForm({
    name: user.name,
    email: user.email
  });
  const submit = (e) => {
    e.preventDefault();
    patch(route("profile.update"));
  };
  return /* @__PURE__ */ jsxs("section", { className, children: [
    /* @__PURE__ */ jsxs("header", { children: [
      /* @__PURE__ */ jsx("h2", { className: "text-lg font-medium text-gray-900", children: "Informazioni del Profilo" }),
      /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-gray-600", children: "Aggiorna le informazioni del tuo profilo e la tua email." })
    ] }),
    /* @__PURE__ */ jsxs("form", { onSubmit: submit, className: "mt-6 space-y-6", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "name", value: "Nome" }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "name",
            className: "mt-1 block w-full",
            value: data.name,
            onChange: (e) => setData("name", e.target.value),
            required: true,
            isFocused: true,
            autoComplete: "name"
          }
        ),
        /* @__PURE__ */ jsx(InputError, { className: "mt-2", message: errors.name })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "email", value: "Email" }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "email",
            type: "email",
            className: "mt-1 block w-full",
            value: data.email,
            onChange: (e) => setData("email", e.target.value),
            required: true,
            autoComplete: "username"
          }
        ),
        /* @__PURE__ */ jsx(InputError, { className: "mt-2", message: errors.email })
      ] }),
      mustVerifyEmail && user.email_verified_at === null && /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("p", { className: "mt-2 text-sm text-gray-800", children: [
          "Il tuo indirizzo email non è verificato.",
          /* @__PURE__ */ jsx(
            Link,
            {
              href: route("verification.send"),
              method: "post",
              as: "button",
              className: "rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",
              children: "Clicca qui per inviare di nuovo la mail di verifica."
            }
          )
        ] }),
        status === "verification-link-sent" && /* @__PURE__ */ jsx("div", { className: "mt-2 text-sm font-medium text-green-600", children: "Un nuovo link di verifica è stato inviato al tuo indirizzo email." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ jsx(PrimaryButton, { disabled: processing, children: "Salva" }),
        /* @__PURE__ */ jsx(
          Transition,
          {
            show: recentlySuccessful,
            enter: "transition ease-in-out",
            enterFrom: "opacity-0",
            leave: "transition ease-in-out",
            leaveTo: "opacity-0",
            children: /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: "Salvato." })
          }
        )
      ] })
    ] })
  ] });
}
const __vite_glob_0_15 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: UpdateProfileInformation
}, Symbol.toStringTag, { value: "Module" }));
function Edit({ auth, mustVerifyEmail, status }) {
  return /* @__PURE__ */ jsxs(
    Authenticated,
    {
      user: auth.user,
      header: /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold leading-tight text-gray-800", children: "Profile" }),
      children: [
        /* @__PURE__ */ jsx(Head, { title: "Profile" }),
        /* @__PURE__ */ jsx("div", { className: "py-12", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl space-y-6 sm:px-6 lg:px-8", children: [
          /* @__PURE__ */ jsx("div", { className: "bg-white p-4 shadow sm:rounded-lg sm:p-8", children: /* @__PURE__ */ jsx(
            UpdateProfileInformation,
            {
              mustVerifyEmail,
              status,
              className: "max-w-xl"
            }
          ) }),
          /* @__PURE__ */ jsx("div", { className: "bg-white p-4 shadow sm:rounded-lg sm:p-8", children: /* @__PURE__ */ jsx(UpdatePasswordForm, { className: "max-w-xl" }) })
        ] }) })
      ]
    }
  );
}
const __vite_glob_0_12 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Edit
}, Symbol.toStringTag, { value: "Module" }));
function Avatar({
  source,
  name = "",
  role = "",
  href = "",
  anchorText = "",
  className = "",
  description = ""
}) {
  return /* @__PURE__ */ jsxs("div", { className: "mt-10 flex flex-col items-center", children: [
    /* @__PURE__ */ jsx(
      "img",
      {
        src: source,
        className: `h-40 w-40 rounded-full border-4 border-red-700 object-cover ${className}`,
        alt: name ? name : anchorText
      }
    ),
    name && /* @__PURE__ */ jsxs("p", { className: "text-center", children: [
      name,
      " ",
      /* @__PURE__ */ jsx("br", {}),
      " ",
      role
    ] }),
    href && /* @__PURE__ */ jsx(
      "a",
      {
        className: "text-center underline dark:text-sky-400",
        href,
        target: "_blank",
        children: anchorText
      }
    ),
    description && /* @__PURE__ */ jsx("p", { className: "mt-3 text-center text-sm", children: description })
  ] });
}
function Footer() {
  const year = /* @__PURE__ */ new Date();
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("footer", { className: "grid h-fit grid-cols-1 text-white md:grid-cols-3", children: [
      /* @__PURE__ */ jsxs("div", { className: "grid place-items-center bg-red-800 p-10 md:block dark:bg-red-900", children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: "/images/remida_logo.webp",
            className: "mr-3 h-12 md:h-16 lg:h-20",
            alt: "ReMida Varese Logo"
          }
        ),
        /* @__PURE__ */ jsx(
          "img",
          {
            src: "/images/altrementi-logo.webp",
            className: "mr-3 h-10 dark:hidden",
            alt: "Altrementi Logo"
          }
        ),
        /* @__PURE__ */ jsx(
          "img",
          {
            src: "/images/altrementi-logo-light.webp",
            className: "mr-3 hidden h-10 dark:inline-block",
            alt: "Altrementi Logo"
          }
        ),
        /* @__PURE__ */ jsx("p", { children: "c/o Chiostro di Voltorre" }),
        /* @__PURE__ */ jsx("p", { children: "Via S. Michele" }),
        /* @__PURE__ */ jsx("p", { children: "21026 Gavirate - Varese" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 place-items-center bg-red-900 p-10 md:col-span-2 md:grid-cols-2 dark:bg-red-950", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-lg font-semibold", children: "Menù" }),
          /* @__PURE__ */ jsx(Link, { className: "text-white", href: route("home"), children: "Home" }),
          /* @__PURE__ */ jsx(Link, { className: "text-white", href: route("about"), children: "Chi siamo" }),
          /* @__PURE__ */ jsx(Link, { className: "text-white", href: route("expertise"), children: "Cosa Facciamo" }),
          /* @__PURE__ */ jsx(Link, { className: "text-white", href: route("gallery"), children: "Galleria" }),
          /* @__PURE__ */ jsx(Link, { className: "text-white", href: route("events"), children: "In Evidenza" }),
          /* @__PURE__ */ jsx(Link, { className: "text-white", href: route("contacts"), children: "Contatti" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
          /* @__PURE__ */ jsx("h2", { className: "mt-5 text-lg font-semibold md:mt-0", children: "Policies" }),
          /* @__PURE__ */ jsx(Link, { className: "text-white", href: route("home"), children: "Privacy Policy" }),
          /* @__PURE__ */ jsx(Link, { className: "text-white", href: route("home"), children: "Cookie Policy" }),
          /* @__PURE__ */ jsx("h2", { className: "mb-3 mt-5 text-lg font-semibold", children: "Social" }),
          /* @__PURE__ */ jsxs("div", { className: "flex space-x-5", children: [
            /* @__PURE__ */ jsx(FaFacebook, { className: "text-3xl" }),
            /* @__PURE__ */ jsx(FaInstagram, { className: "text-3xl" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "flex h-fit flex-col items-center bg-red-950 p-1 lg:flex-row lg:justify-around", children: [
      /* @__PURE__ */ jsxs("p", { className: "text-lg text-gray-200", children: [
        year.getFullYear(),
        "© Remida Varese"
      ] }),
      /* @__PURE__ */ jsxs("p", { className: "mt-3 text-lg text-gray-200 lg:mt-0", children: [
        "Made with",
        " ",
        /* @__PURE__ */ jsx("span", { role: "img", "aria-label": "dita", children: String.fromCodePoint(127535) }),
        " ",
        "by",
        " ",
        /* @__PURE__ */ jsx(
          "a",
          {
            title: "Fabio Angelici",
            target: "_blank",
            href: "https://fabioangelici.com",
            className: "text-white underline",
            rel: "noreferrer",
            children: "Fabio Angelici"
          }
        )
      ] })
    ] })
  ] });
}
function cn$1(...inputs) {
  return twMerge(clsx(inputs));
}
const ShimmerButton = React__default.forwardRef(({
  shimmerColor = "#ffffff",
  shimmerSize = "0.05em",
  shimmerDuration = "3s",
  borderRadius = "100px",
  background = "rgba(0, 0, 1)",
  className,
  children,
  ...props
}, ref) => {
  return /* @__PURE__ */ jsxs(
    "button",
    {
      style: {
        "--spread": "90deg",
        "--shimmer-color": shimmerColor,
        "--radius": borderRadius,
        "--speed": shimmerDuration,
        "--cut": shimmerSize,
        "--bg": background
      },
      className: cn$1(
        "group relative z-0 flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap border border-gray-200 border-white/10 px-6 py-3 text-white [background:var(--bg)] [border-radius:var(--radius)] dark:text-black dark:border-gray-800",
        "transform-gpu transition-transform duration-300 ease-in-out active:translate-y-[1px]",
        className
      ),
      ref,
      ...props,
      children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            className: cn$1(
              "-z-30 blur-[2px]",
              "absolute inset-0 overflow-visible [container-type:size]"
            ),
            children: /* @__PURE__ */ jsx(
              "div",
              {
                className: "absolute inset-0 h-[100cqh] animate-slide [aspect-ratio:1] [border-radius:0] [mask:none]",
                children: /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: "animate-spin-around absolute inset-[-100%] w-auto rotate-0 [background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,var(--shimmer-color)_var(--spread),transparent_var(--spread))] [translate:0_0]"
                  }
                )
              }
            )
          }
        ),
        children,
        /* @__PURE__ */ jsx(
          "div",
          {
            className: cn$1(
              "insert-0 absolute h-full w-full",
              "rounded-2xl px-4 py-1.5 text-sm font-medium shadow-[inset_0_-8px_10px_#ffffff1f]",
              // transition
              "transform-gpu transition-all duration-300 ease-in-out",
              // on hover
              "group-hover:shadow-[inset_0_-6px_10px_#ffffff3f]",
              // on click
              "group-active:shadow-[inset_0_-10px_10px_#ffffff3f]"
            )
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: cn$1(
              "absolute -z-20 [background:var(--bg)] [border-radius:var(--radius)] [inset:var(--cut)]"
            )
          }
        )
      ]
    }
  );
});
ShimmerButton.displayName = "ShimmerButton";
const Switch = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SwitchPrimitives.Root,
  {
    className: cn$1(
      "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors data-[state=checked]:bg-gray-900 data-[state=unchecked]:bg-gray-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:cursor-not-allowed disabled:opacity-50 dark:data-[state=checked]:bg-gray-50 dark:data-[state=unchecked]:bg-gray-800 dark:focus-visible:ring-gray-300 dark:focus-visible:ring-offset-gray-950",
      className
    ),
    ...props,
    ref,
    children: /* @__PURE__ */ jsx(
      SwitchPrimitives.Thumb,
      {
        className: cn$1(
          "pointer-events-none block h-5 w-5 rounded-full bg-white shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0 dark:bg-gray-950"
        )
      }
    )
  }
));
Switch.displayName = SwitchPrimitives.Root.displayName;
function ThemeSwitcher() {
  const [isDark, setIsDark] = useState(
    localStorage.getItem("theme") === "dark"
  );
  const handleThemeChange = () => {
    setIsDark((isDark2) => !isDark2);
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    }
  }, []);
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-1", children: [
    /* @__PURE__ */ jsx(FaSun, { className: isDark ? "text-white" : "text-black" }),
    /* @__PURE__ */ jsx(
      Switch,
      {
        onClick: handleThemeChange,
        checked: isDark,
        className: "data-[state=unchecked]:bg-gray-400"
      }
    ),
    /* @__PURE__ */ jsx(FaMoon, { className: isDark ? "text-white" : "text-black" })
  ] }) });
}
function NavbarLink({ active = false, children, ...props }) {
  return /* @__PURE__ */ jsx(
    Link,
    {
      ...props,
      className: `block py-2 pl-3 pr-4 font-bold text-black/90 transition-colors hover:text-gray-400 md:p-0 md:text-lg dark:text-slate-400 dark:hover:text-slate-500 ${active ? "bg-red-700 font-bold text-white md:bg-transparent md:text-red-700 md:hover:text-red-700 dark:text-white dark:hover:text-white" : ""}`,
      children
    }
  );
}
function NavbarComponent() {
  return /* @__PURE__ */ jsxs(
    Navbar,
    {
      className: "fixed left-0 top-0 z-50 w-full bg-white/70 shadow-md backdrop-blur-lg",
      fluid: true,
      rounded: true,
      children: [
        /* @__PURE__ */ jsx(Navbar.Brand, { href: route("home"), children: /* @__PURE__ */ jsxs("div", { className: "items-end md:flex", children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: "/images/remida_logo.webp",
              className: "mr-3 h-12 md:h-16 lg:h-20",
              alt: "ReMida Varese Logo"
            }
          ),
          /* @__PURE__ */ jsx(
            "img",
            {
              src: "/images/altrementi-logo.webp",
              className: "mr-3 flex h-10 items-end dark:hidden",
              alt: "Altrementi Logo"
            }
          ),
          /* @__PURE__ */ jsx(
            "img",
            {
              src: "/images/altrementi-logo-light.webp",
              className: "mr-3 hidden h-10 dark:inline-block",
              alt: "Altrementi Logo"
            }
          )
        ] }) }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center md:order-2", children: [
          /* @__PURE__ */ jsx(ThemeSwitcher, {}),
          /* @__PURE__ */ jsx(Link, { href: route("contacts"), className: "ml-5", children: /* @__PURE__ */ jsx(
            ShimmerButton,
            {
              className: "",
              shimmerSize: "0.2rem",
              background: "rgba(185, 28, 28 , 1)",
              children: /* @__PURE__ */ jsx("span", { className: "whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white lg:text-lg dark:from-white dark:to-slate-900/10", children: "Contatti" })
            }
          ) }),
          /* @__PURE__ */ jsx(Navbar.Toggle, {})
        ] }),
        /* @__PURE__ */ jsxs(Navbar.Collapse, { children: [
          /* @__PURE__ */ jsx(
            NavbarLink,
            {
              href: route("home"),
              active: route().current("home"),
              children: "Home"
            }
          ),
          /* @__PURE__ */ jsx(
            NavbarLink,
            {
              href: route("about"),
              active: route().current("about"),
              children: "Chi Siamo"
            }
          ),
          /* @__PURE__ */ jsx(
            NavbarLink,
            {
              href: route("expertise"),
              active: route().current("expertise"),
              children: "Cosa Facciamo"
            }
          ),
          /* @__PURE__ */ jsx(
            NavbarLink,
            {
              href: route("gallery"),
              active: route().current("gallery"),
              children: "Galleria"
            }
          ),
          /* @__PURE__ */ jsx(
            NavbarLink,
            {
              href: route("events"),
              active: route().current("events"),
              children: "In Evidenza"
            }
          )
        ] })
      ]
    }
  );
}
function PublicLayout({ children }) {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(NavbarComponent, {}),
    /* @__PURE__ */ jsx("main", { children }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
function About() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Head, { children: [
      /* @__PURE__ */ jsx("title", { children: "REMIDA VARESE - Innoviamo con creatività | Chi Siamo" }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "description",
          content: "Remida Varese è un Centro di ricerca creativa attraverso il riutilizzo di materiali non strutturati di origine aziendale e artigianale"
        }
      ),
      /* @__PURE__ */ jsx(
        "link",
        {
          rel: "canonical",
          href: "https://remidavarese.it/chi-siamo"
        }
      )
    ] }),
    /* @__PURE__ */ jsxs(PublicLayout, { children: [
      /* @__PURE__ */ jsxs("section", { className: "mt-[110px] grid h-screen grid-cols-1 bg-black/60 md:grid-cols-3 md:p-0 lg:mt-0", children: [
        /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center text-white", children: /* @__PURE__ */ jsxs(
          motion.h1,
          {
            initial: "hidden",
            animate: "visible",
            variants,
            className: "w-9/12 py-5 text-3xl md:text-6xl",
            children: [
              /* @__PURE__ */ jsx("span", { className: "font-bold", children: "Chi Siamo" }),
              /* @__PURE__ */ jsx("br", {}),
              /* @__PURE__ */ jsxs("p", { className: "mt-5 text-xl md:text-2xl", children: [
                "Remida Varese è un",
                " ",
                /* @__PURE__ */ jsx("strong", { children: "Centro di ricerca creativa attraverso il riutilizzo di materiali non strutturati di origine aziendale e artigianale" }),
                " ",
                "(sottoprodotti, rimanenze di magazzino, ecc.) gestito dall’Associazione di Promozione Sociale Altrementi di Varese."
              ] })
            ]
          }
        ) }),
        /* @__PURE__ */ jsx("div", { className: "col-span-2", children: /* @__PURE__ */ jsx(
          "img",
          {
            className: "h-screen w-full object-cover opacity-90",
            src: "/images/about.webp",
            alt: ""
          }
        ) })
      ] }),
      /* @__PURE__ */ jsxs(
        motion.section,
        {
          initial: "hidden",
          whileInView: "visible",
          viewport: { once: true },
          variants,
          className: "flex min-h-fit flex-col items-center justify-center bg-slate-700 p-2 md:p-10",
          children: [
            /* @__PURE__ */ jsx("h2", { className: "mb-10 text-center text-6xl text-white", children: "Remida Varese" }),
            /* @__PURE__ */ jsxs("div", { className: "mb-10 max-w-6xl px-5 text-xl text-white md:px-0 md:text-2xl", children: [
              /* @__PURE__ */ jsxs("p", { children: [
                "Nato nel 2012 grazie alla fondamentale collaborazione di",
                " ",
                /* @__PURE__ */ jsx(
                  "a",
                  {
                    href: "http://www.modusriciclandi.info/",
                    target: "_blank",
                    rel: "noreferrer",
                    className: "text-white underline",
                    children: "Remida Reggio Emilia"
                  }
                ),
                ", della Provincia di Varese - settore Ambiente e al finanziamento ottenuto dal progetto Interreg",
                " ",
                /* @__PURE__ */ jsx(
                  "a",
                  {
                    href: "https://www.remida.org/",
                    target: "_blank",
                    rel: "noreferrer",
                    className: "text-white underline",
                    children: "ModusRiciclandi"
                  }
                ),
                " ",
                ", un Piano Integrato Transfrontaliero tra Provincia di Varese e Cantone Ticino, dalla sua nascita ha sede presso il",
                " ",
                /* @__PURE__ */ jsx(
                  "a",
                  {
                    href: "https://it.wikipedia.org/wiki/Chiostro_di_Voltorre",
                    target: "_blank",
                    rel: "noreferrer",
                    className: "text-white underline",
                    children: "Chiostro di Voltorre"
                  }
                ),
                ", attualmente attivo in convenzione con il Comune di Gavirate."
              ] }),
              /* @__PURE__ */ jsx("p", { className: "mt-5", children: "Remida Varese è uno spazio nel quale chi entra trova svariati materiali di origine aziendale ed artigianale, ma anche suggerimenti, sensazioni, curiosità, divertimento, emozioni, possibili collaborazioni." }),
              /* @__PURE__ */ jsx("p", { className: "mt-5", children: "Remida Varese è un’occasione per interagire con molteplici realtà, una predisposizione del pensiero che induce alla ricerca di diverse prospettive in un’ottica di sostenibilità e rispetto della materia, dell’ambiente, dell’uomo." }),
              /* @__PURE__ */ jsx("p", { className: "mt-5", children: "Remida Varese si connota come una risorsa importante di riqualificazione ed arricchimento delle proposte educative, ambientali ed artistiche presenti sul territorio dando nuova vita e valore agli errori di produzione, attraverso riutilizzi innovati con le seguenti iniziative:" }),
              /* @__PURE__ */ jsxs("ul", { className: "ml-5 mt-5", children: [
                /* @__PURE__ */ jsx("li", { children: "Attività educative e didattiche per le scuole di ogni ordine e grado" }),
                /* @__PURE__ */ jsx("li", { children: "Percorsi di Formazione per operatori socio-educativi e insegnanti" }),
                /* @__PURE__ */ jsxs("li", { children: [
                  "Raccolta e distribuzione del materiale non strutturato di origine aziendale e artigianale",
                  " "
                ] }),
                /* @__PURE__ */ jsx("li", { children: "Collaborazioni con altri Enti del terzo settore ed aziende profit" }),
                /* @__PURE__ */ jsx("li", { children: "Eventi e laboratori con Enti Locali e Pro Loco" }),
                /* @__PURE__ */ jsx("li", { children: "Installazioni e workshop con artisti, stilisti, eco designer" })
              ] })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        motion.section,
        {
          initial: "hidden",
          whileInView: "visible",
          viewport: { once: true },
          variants,
          className: "flex flex-col items-center justify-center bg-transparent p-5 py-10 dark:bg-slate-600",
          children: [
            /* @__PURE__ */ jsx("h2", { className: "mb-10 text-6xl text-black dark:text-gray-300", children: "Rete Remida" }),
            /* @__PURE__ */ jsxs("div", { className: "mb-10 max-w-6xl px-5 text-xl text-black md:px-0 md:text-2xl dark:text-white", children: [
              /* @__PURE__ */ jsx("p", { children: "ReMida Varese fa parte di un network internazionale, una rete che ad oggi si compone di 12 centri, ispirati alla stessa filosofia del riuso creativo dei materiali di recupero." }),
              /* @__PURE__ */ jsx("p", { className: "mt-5", children: "Il progetto Remida nasce nel 1996 a Reggio Emilia da un’idea dell’Istituzione Nidi e Scuole dell’Infanzia di Reggio Emilia, Fondazione Reggio Children e Iren. Gli altri centri sono a: Bologna, Borgo San Lorenzo (Firenze), Genova, Milano, Napoli, Torino, Trondheim (Norvegia), Skillingaryd (Svezia), Buenos Aires (Argentina), Perth (Australia)." }),
              /* @__PURE__ */ jsx("p", { className: "mt-5", children: "Lo scambio e i contatti periodici tra i vari Centri Remida rafforzano il patto tra persone e organizzazioni che stanno costruendo un percorso di corresponsabilità nell’ambito dell’Educazione ambientale e della cultura in generale." })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        motion.section,
        {
          initial: "hidden",
          whileInView: "visible",
          viewport: { once: true },
          variants,
          className: "flex min-h-fit flex-col items-center justify-center bg-slate-700 p-2 md:p-10",
          children: [
            /* @__PURE__ */ jsx("h2", { className: "mb-10 text-center text-6xl text-white", children: "Altrementi APS" }),
            /* @__PURE__ */ jsxs("div", { className: "mb-10 max-w-6xl px-5 text-xl text-white md:px-0 md:text-2xl", children: [
              /* @__PURE__ */ jsx("p", { children: "L’Associazione di Promozione Sociale AltreMenti nasce nel 2009 (ai sensi della legge 383/2000) grazie alla volontà di persone dalle capacità, competenze ed esperienze diverse. Animatori sociali, artisti, educatrici, pedagogiste, architetti e grafici si sono uniti con scopo di migliorare la tutela dell’ambiente attraverso la realizzazione di progetti, interventi inerenti soprattutto la tematica dello sviluppo sostenibile." }),
              /* @__PURE__ */ jsx("p", { className: "mt-5", children: "AltreMenti realizza i propri fini istituzionali con le seguenti attività:" }),
              /* @__PURE__ */ jsxs("ul", { className: "ml-5 mt-5", children: [
                /* @__PURE__ */ jsx("li", { children: "progettazione e realizzazione di laboratori creativi attraverso l’uso dei materiali di scarto aziendale e di materiali naturali;" }),
                /* @__PURE__ */ jsx("li", { children: "progettazione di percorsi educativi ed animativi, anche all’interno di programmi della Comunità Europea, Repubblica Italiana, Regione, Provincia, dei Comuni, Comunità Montane, Asl, ecc.;" }),
                /* @__PURE__ */ jsx("li", { children: "consulenza per la gestione di spazi e attività, anche a seguito di convenzioni con Enti Locali, per il riuso creativo dei materiali di scarto aziendale e di materiali naturali;" }),
                /* @__PURE__ */ jsx("li", { children: "progettazione e realizzazione di corsi di formazione;" }),
                /* @__PURE__ */ jsx("li", { children: "promozione di attività sociali di carattere ambientale rivolte particolarmente a categorie svantaggiate;" }),
                /* @__PURE__ */ jsx("li", { children: "Installazioni e workshop con artisti, stilisti, eco designer" })
              ] }),
              /* @__PURE__ */ jsx("p", { className: "mt-5", children: "Nel 2012 ha inaugurato il Centro ReMida Varese presso il Chiostro di Voltorre a Gavirate in collaborazione con la Provincia di Varese ed altri partner italiani e ticinesi." }),
              /* @__PURE__ */ jsx("p", { className: "mt-5", children: "Associazione di Promozione Sociale Altrementi ha sede in Via Pagliano 18 21100 a Varese C.F. 95067980128 P.IVA 03289460127 ed è iscritta nel Registro Unico Nazionale del Terzo Settore con numero di Repertorio 86522" })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        motion.section,
        {
          initial: "hidden",
          whileInView: "visible",
          viewport: { once: true },
          variants,
          className: "flex flex-col items-center justify-center bg-transparent p-5 py-10 dark:bg-slate-600",
          children: [
            /* @__PURE__ */ jsx("h2", { className: "mb-10 text-6xl text-black dark:text-gray-300", children: "Associati" }),
            /* @__PURE__ */ jsxs("div", { className: "mb-10 max-w-6xl px-5 text-xl text-black md:px-0 md:text-2xl dark:text-white", children: [
              /* @__PURE__ */ jsx("p", { children: "L’equipe di Remida Varese è composta da professionisti in animazione sociale, arte, educazione, pedagogia, architettura, musica e grafica." }),
              /* @__PURE__ */ jsx("h2", { className: "mt-5 text-center text-3xl font-semibold uppercase", children: "consiglio direttivo" }),
              /* @__PURE__ */ jsxs("div", { className: "grid max-w-7xl grid-cols-1 justify-items-center md:grid-cols-3", children: [
                /* @__PURE__ */ jsx(
                  Avatar,
                  {
                    source: "/images/no-image.jpg",
                    name: "Marco Quilici",
                    role: "Presidente"
                  }
                ),
                /* @__PURE__ */ jsx(
                  Avatar,
                  {
                    source: "/images/no-image.jpg",
                    name: "Davide Quilici",
                    role: "Vice Presidente"
                  }
                ),
                /* @__PURE__ */ jsx(
                  Avatar,
                  {
                    source: "/images/no-image.jpg",
                    name: "Enrico Casmirri",
                    role: "Segretario"
                  }
                )
              ] }),
              /* @__PURE__ */ jsx("h2", { className: "mt-10 text-center text-3xl font-semibold uppercase", children: "Associati Operativi" }),
              /* @__PURE__ */ jsxs("div", { className: "grid max-w-7xl grid-cols-1 justify-items-center md:grid-cols-4", children: [
                /* @__PURE__ */ jsx(
                  Avatar,
                  {
                    source: "/images/no-image.jpg",
                    name: "Lorella Manzo"
                  }
                ),
                /* @__PURE__ */ jsx(
                  Avatar,
                  {
                    source: "/images/no-image.jpg",
                    name: "Antonio Testa"
                  }
                ),
                /* @__PURE__ */ jsx(
                  Avatar,
                  {
                    source: "/images/no-image.jpg",
                    name: "Stefania Miano"
                  }
                ),
                /* @__PURE__ */ jsx(
                  Avatar,
                  {
                    source: "/images/no-image.jpg",
                    name: "Monica Sistu"
                  }
                ),
                /* @__PURE__ */ jsx(
                  Avatar,
                  {
                    source: "/images/no-image.jpg",
                    name: "Paola Bertaglia"
                  }
                ),
                /* @__PURE__ */ jsx(
                  Avatar,
                  {
                    source: "/images/no-image.jpg",
                    name: "Sara Dalla Pozza"
                  }
                ),
                /* @__PURE__ */ jsx(
                  Avatar,
                  {
                    source: "/images/no-image.jpg",
                    name: "Barbara Parietti"
                  }
                ),
                /* @__PURE__ */ jsx(
                  Avatar,
                  {
                    source: "/images/no-image.jpg",
                    name: "Marta Bonomi"
                  }
                )
              ] })
            ] })
          ]
        }
      )
    ] })
  ] });
}
const __vite_glob_0_16 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: About
}, Symbol.toStringTag, { value: "Module" }));
function Agency() {
  const { flash } = usePage().props;
  const {
    data,
    setData,
    post,
    processing,
    errors,
    wasSuccessful,
    clearErrors,
    reset
  } = useForm({
    name: "",
    email: "",
    phone: "",
    message: "",
    privacy: false
  });
  const submit = (e) => {
    e.preventDefault();
    post(route("contact.emporium"), {
      preserveScroll: true,
      preserveState: true,
      onSuccess: () => {
        reset("name", "email", "phone", "message", "privacy");
        clearErrors();
      }
    });
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Head, { children: [
      /* @__PURE__ */ jsx("title", { children: "REMIDA VARESE - Innoviamo con creatività | Aziende" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "" }),
      /* @__PURE__ */ jsx(
        "link",
        {
          rel: "canonical",
          href: "https://remidavarese.it/aziende"
        }
      )
    ] }),
    /* @__PURE__ */ jsxs(PublicLayout, { children: [
      /* @__PURE__ */ jsxs("section", { className: "mt-[110px] grid h-screen grid-cols-1 bg-black/60 p-5 md:grid-cols-3 md:p-0 lg:mt-0", children: [
        /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center text-white", children: /* @__PURE__ */ jsxs(
          motion.h1,
          {
            initial: "hidden",
            animate: "visible",
            variants,
            className: "w-9/12 py-5 text-3xl md:text-6xl",
            children: [
              /* @__PURE__ */ jsx("span", { className: "font-bold", children: "Aziende" }),
              /* @__PURE__ */ jsxs("p", { className: "mt-5 text-xl md:text-2xl", children: [
                "Partecipare al progetto Remida Varese significa impegnarsi attivamente",
                " ",
                /* @__PURE__ */ jsx("strong", { children: "nella riduzione degli sprechi e nella promozione di un'economia circolare" }),
                ", dimostrando concretamente l’impegno per la sostenibilità d’impresa."
              ] })
            ]
          }
        ) }),
        /* @__PURE__ */ jsx("div", { className: "col-span-2", children: /* @__PURE__ */ jsx(
          "img",
          {
            className: "h-screen w-full object-cover opacity-90",
            src: "/images/agency.webp",
            alt: ""
          }
        ) })
      ] }),
      /* @__PURE__ */ jsx(
        motion.section,
        {
          initial: "hidden",
          whileInView: "visible",
          viewport: { once: true },
          variants,
          className: "bg-transparent dark:bg-slate-500 dark:text-white",
          children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-5 py-10 text-2xl", children: [
            /* @__PURE__ */ jsx("p", { children: "Con la nostra esperienza siamo in grado di trasformare gli scarti in strumenti educativi, didattici e artistici." }),
            /* @__PURE__ */ jsxs("p", { className: "mt-5", children: [
              "Le aziende partner di Remida Varese beneficiano di una ",
              /* @__PURE__ */ jsx("strong", { children: "maggiore visibilità" }),
              " e aumentano la ",
              /* @__PURE__ */ jsx("strong", { children: "reputazione aziendale" }),
              ", associando il proprio marchio a un progetto innovativo e sostenibile riconosciuto a livello sia locale che internazionale."
            ] }),
            /* @__PURE__ */ jsx("p", { className: "mt-5", children: "Un’azienda può fornire fornire i propri materiali e diventare partner del progetto Remida Varese con vari tipi di collaborazioni, per impattare positivamente sulla responsabilità socio-ambientale d’impresa e sulla sensibilizzazione dei cittadini del territorio." }),
            /* @__PURE__ */ jsx("p", { className: "mt-5", children: "Negli anni hanno aderito al progetto più di 45 tra aziende, artigiani, commercianti e singoli imprenditori." })
          ] })
        }
      ),
      /* @__PURE__ */ jsxs(
        motion.section,
        {
          initial: "hidden",
          whileInView: "visible",
          viewport: { once: true },
          variants,
          className: "grid grid-cols-1 bg-transparent md:grid-cols-2 dark:bg-slate-600",
          children: [
            /* @__PURE__ */ jsxs("div", { className: "rounded-lg border-2 border-red-200 bg-slate-600 p-10 text-2xl text-white", children: [
              /* @__PURE__ */ jsx("h2", { className: "mb-10 text-center text-6xl", children: "Fornitura Materiali" }),
              /* @__PURE__ */ jsxs("p", { children: [
                "Per aderire al progetto vi invitiamo a",
                " ",
                /* @__PURE__ */ jsx("strong", { children: "contattarci per valutare" }),
                " insieme quali materiali potrebbero esserci utili, escludendo quelli pericolosi all’utilizzo manuale o troppo sporchi."
              ] }),
              /* @__PURE__ */ jsxs("p", { className: "mt-5", children: [
                /* @__PURE__ */ jsx("strong", { children: "I nostri laboratori" }),
                ", da concordare per tipologia con il committente, come sempre proposti attraverso il riutilizzo di materiali di scarto aziendale e artigianale,",
                " ",
                /* @__PURE__ */ jsx("strong", { children: "hanno l'obiettivo" }),
                " di far vivere ai partecipanti una",
                " ",
                /* @__PURE__ */ jsx("strong", { children: "sensazione di soddisfazione" }),
                " per l’opera prodotta ed un altrettanto fondamentale",
                " ",
                /* @__PURE__ */ jsx("strong", { children: "senso di rilassamento e benessere" }),
                " ",
                "che il processo creativo è capace di indurre, oltre che la naturale propensione alla sostenibilità ambientale."
              ] }),
              /* @__PURE__ */ jsxs("p", { className: "mt-5", children: [
                "Effettueremo un ",
                /* @__PURE__ */ jsx("strong", { children: "sopralluogo" }),
                " per comprendere meglio la natura e la quantità dei materiali disponibili."
              ] }),
              /* @__PURE__ */ jsxs("p", { className: "mt-5", children: [
                "Stabiliremo le ",
                /* @__PURE__ */ jsx("strong", { children: "modalità operative" }),
                " ",
                "di raccolta più efficienti, minimizzando ogni impatto logistico."
              ] }),
              /* @__PURE__ */ jsxs("p", { className: "mt-5", children: [
                /* @__PURE__ */ jsx("strong", { children: "Formalizzeremo" }),
                " la nostra collaborazione con una ",
                /* @__PURE__ */ jsx("strong", { children: "convenzione" }),
                " ",
                "che regolerà la fornitura dei materiali in modo chiaro e trasparente, rispettando le vostre esigenze e tempistiche."
              ] }),
              /* @__PURE__ */ jsxs("p", { className: "mt-5", children: [
                "Ci sarà un ",
                /* @__PURE__ */ jsx("strong", { children: "monitoraggio continuo" }),
                " ",
                "della collaborazione, per apportare eventuali miglioramenti al processo."
              ] }),
              /* @__PURE__ */ jsxs("p", { className: "mt-5", children: [
                "La",
                " ",
                /* @__PURE__ */ jsx("strong", { children: "donazione dei materiali sarà gratuita" }),
                " ",
                "e il ",
                /* @__PURE__ */ jsx("strong", { children: "trasporto a nostro carico" }),
                "."
              ] }),
              /* @__PURE__ */ jsxs("p", { className: "mt-5", children: [
                "La ",
                /* @__PURE__ */ jsx("strong", { children: "donazione dei materiali" }),
                " da parte dell’azienda aderente al progetto Remida Varese",
                " ",
                /* @__PURE__ */ jsx("strong", { children: "non è sottoposta alla normativa relativa alla gestione dei rifiuti" }),
                "."
              ] }),
              /* @__PURE__ */ jsx("p", { className: "mt-5", children: "Collaborare con Remida Varese è un’opportunità per trasformare gli scarti della vostra azienda in risorse utili per la comunità, contribuendo attivamente a un progetto di sostenibilità ambientale e sociale. Vi invitiamo a unirvi a noi in questa missione, per creare insieme un futuro più verde e creativo. Contattateci per ulteriori informazioni e per avviare una collaborazione." })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "rounded-lg border-2 border-red-200 bg-slate-300 p-10 text-2xl text-black dark:bg-slate-400", children: [
              /* @__PURE__ */ jsx("h2", { className: "mb-10 text-center text-6xl", children: "Partnership" }),
              /* @__PURE__ */ jsxs("p", { children: [
                "Per un’impresa migliorare la sostenibilità è strettamente legato al",
                " ",
                /* @__PURE__ */ jsx("strong", { children: "miglioramento della reputazione" }),
                ", alla",
                " ",
                /* @__PURE__ */ jsx("strong", { children: "soddisfazione delle aspettative dei dipendenti" }),
                " ",
                "e alla",
                " ",
                /* @__PURE__ */ jsx("strong", { children: "maggiore efficienza e riduzione degli sprechi" }),
                "."
              ] }),
              /* @__PURE__ */ jsxs("p", { className: "mt-5", children: [
                "Divenire partner del progetto Remida Varese significa ",
                /* @__PURE__ */ jsx("strong", { children: "condividere la missione" }),
                " ",
                "di migliorare la sostenibilità sociale e ambientale non solo della propria organizzazione,",
                " ",
                /* @__PURE__ */ jsx("strong", { children: "ma dell'intera comunità a cui apparteniamo" }),
                "."
              ] }),
              /* @__PURE__ */ jsxs("p", { className: "mt-5", children: [
                "Vi proponiamo una prospettiva diversa nel guardare gli oggetti che apparentemente non hanno più valore, ma che possono “risorgere” grazie ad un riutilizzo creativo, progettando e realizzando insieme",
                " ",
                /* @__PURE__ */ jsx("strong", { children: "iniziative sia interne all’azienda sia esterne" }),
                ", coinvolgendo le scuole, le associazioni, le istituzioni e i cittadini del proprio territorio di riferimento."
              ] }),
              /* @__PURE__ */ jsx("p", { className: "mt-5", children: "Le proposte possono essere:" }),
              /* @__PURE__ */ jsxs("ul", { className: "mt-5", children: [
                /* @__PURE__ */ jsx("li", { children: "festa creativa con le famiglie dei dipendenti" }),
                /* @__PURE__ */ jsx("li", { children: "installazioni o eventi artistici realizzati con scarti aziendali o naturali" }),
                /* @__PURE__ */ jsx("li", { children: "team-building aziendale" }),
                /* @__PURE__ */ jsx("li", { children: "laboratori con le scuole e le associazioni del territorio" }),
                /* @__PURE__ */ jsx("li", { children: "festa di comunità insieme agli Enti Locali del territorio" })
              ] }),
              /* @__PURE__ */ jsx("p", { className: "mt-5", children: "Hanno collaborato con noi, RCS Mediagroup Spa (Corriere della Sera e Gazzetta dello sport) Milano, AON Italia Spa Milano, Sole 24 Spa Milano, Avery Dennison Ris Italia Srl Cadorago, Sielco Srl Buguggiate" })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        motion.section,
        {
          initial: "hidden",
          whileInView: "visible",
          viewport: { once: true },
          variants,
          className: "bg-slate-600 text-white",
          children: [
            /* @__PURE__ */ jsx("h2", { className: "mb-10 pt-10 text-center text-6xl", children: "Aziende Fornitrici" }),
            /* @__PURE__ */ jsxs("div", { className: "mx-auto grid max-w-7xl grid-cols-1 py-10 text-2xl md:grid-cols-3 md:gap-10", children: [
              /* @__PURE__ */ jsxs("div", { className: "", children: [
                /* @__PURE__ */ jsx("p", { className: "mb-3", children: "Almar Snc - Gavirate" }),
                /* @__PURE__ */ jsx("p", { className: "mb-3", children: "Bel-Go Briko Srl Varese" }),
                /* @__PURE__ */ jsx("p", { className: "mb-3", children: "Colorificio Papotti Srl Buguggiate" }),
                /* @__PURE__ */ jsx("p", { className: "mb-3", children: "Crs maglieria Srl Varese" }),
                /* @__PURE__ */ jsx("p", { className: "mb-3", children: "D&S Srl Galliate" }),
                /* @__PURE__ */ jsx("p", { className: "mb-3", children: "Elmec informatica Spa Brunello" }),
                /* @__PURE__ */ jsx("p", { className: "mb-3", children: "Eurofilm Srl Vedano Olona" }),
                /* @__PURE__ */ jsx("p", { className: "mb-3", children: "Grossoni Legno Srl Somma Lombardo" }),
                /* @__PURE__ */ jsx("p", { className: "mb-3", children: "Ilma Plastica Srl Oltrona di Gavirate" }),
                /* @__PURE__ */ jsx("p", { className: "mb-3", children: "IPL Spa Besozzo" }),
                /* @__PURE__ */ jsx("p", { className: "mb-3", children: "Lati Spa Vedano Olona" }),
                /* @__PURE__ */ jsx("p", { className: "mb-3", children: "LC Sas Cassano Magnago" }),
                /* @__PURE__ */ jsx("p", { className: "mb-3", children: "Limenta Srl Busto Arsizio" }),
                /* @__PURE__ */ jsx("p", { className: "mb-3", children: "Link.it Srl Buguggiate" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "", children: [
                /* @__PURE__ */ jsx("p", { className: "mb-3", children: "Maglificio Elisa Srl Varese" }),
                /* @__PURE__ */ jsx("p", { className: "mb-3", children: "Mascioni Spa Cuvio" }),
                /* @__PURE__ */ jsx("p", { className: "mb-3", children: "Merlett Spa Daverio" }),
                /* @__PURE__ */ jsx("p", { className: "mb-3", children: "Mirage Spa Venegono Inferiore" }),
                /* @__PURE__ */ jsx("p", { className: "mb-3", children: "Miroglio Gruppo Spa Alba" }),
                /* @__PURE__ */ jsx("p", { className: "mb-3", children: "Montplast Srl Arese" }),
                /* @__PURE__ */ jsx("p", { className: "mb-3", children: "Nice Srl Albizzate" }),
                /* @__PURE__ */ jsx("p", { className: "mb-3", children: "Nuova DIBI Snc Besozzo" }),
                /* @__PURE__ */ jsx("p", { className: "mb-3", children: "ODB Magneti Srl Cuveglio" }),
                /* @__PURE__ */ jsx("p", { className: "mb-3", children: "Polinelli srl Daverio" }),
                /* @__PURE__ */ jsx("p", { className: "mb-3", children: "Pusterla 1880 Spa Venegono Inferiore" }),
                /* @__PURE__ */ jsx("p", { className: "mb-3", children: "Radice Gomma Srl Origgio" }),
                /* @__PURE__ */ jsx("p", { className: "mb-3", children: "Rivestimenti speciali Srl Varese" }),
                /* @__PURE__ */ jsxs("p", { className: "mb-3", children: [
                  "Stamperia di Magnago Srl Magnago",
                  " "
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "", children: [
                /* @__PURE__ */ jsx("p", { className: "mb-3", children: "Scenica Srl Rescaldina" }),
                /* @__PURE__ */ jsx("p", { className: "mb-3", children: "Seprio Plast Srl Tradate" }),
                /* @__PURE__ */ jsx("p", { className: "mb-3", children: "Servi Grafiche Spa Busto Arsizio" }),
                /* @__PURE__ */ jsx("p", { className: "mb-3", children: "Tacchificio Villa Cortese Srl Villa Cortese" }),
                /* @__PURE__ */ jsx("p", { className: "mb-3", children: "Tessitura Arnetta Srl Gazzada Schianno" }),
                /* @__PURE__ */ jsx("p", { className: "mb-3", children: "Tessitura Denna Srl Busto Arsizio" }),
                /* @__PURE__ */ jsx("p", { className: "mb-3", children: "Tessitura Vignetta Srl Bodio Lomnago" }),
                /* @__PURE__ */ jsx("p", { className: "mb-3", children: "Traflex plastic Srl Casale Litta" }),
                /* @__PURE__ */ jsx("p", { className: "mb-3", children: "Tre60 Snc Milano" }),
                /* @__PURE__ */ jsx("p", { className: "mb-3", children: "Verve Spa Venegono Superiore" }),
                /* @__PURE__ */ jsx("p", { className: "mb-3", children: "Virex gomma Srl Somma Lombardo" }),
                /* @__PURE__ */ jsx("p", { className: "mb-3", children: "Yamamay Spa Gallarate" }),
                /* @__PURE__ */ jsx("p", { className: "mb-3", children: "Zago Sas Crosio della Valle" })
              ] })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        motion.section,
        {
          initial: "hidden",
          whileInView: "visible",
          viewport: { once: true },
          variants,
          className: "grid place-items-center p-2 md:p-10 dark:bg-slate-500 dark:text-white",
          children: [
            /* @__PURE__ */ jsx("div", { className: "", children: /* @__PURE__ */ jsx("h2", { className: "mb-10 text-6xl", children: "Contattaci" }) }),
            /* @__PURE__ */ jsxs("div", { className: "mx-auto w-full p-5 md:w-5/12 md:p-0", children: [
              wasSuccessful && /* @__PURE__ */ jsx("div", { className: "mb-5 w-full rounded-lg bg-emerald-500 p-5 text-center text-white", children: flash.message }),
              /* @__PURE__ */ jsxs(
                "form",
                {
                  className: "space-y-3 rounded-xl bg-gray-200 p-10 text-black shadow-lg dark:bg-slate-600",
                  onSubmit: submit,
                  children: [
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx(
                        InputLabel,
                        {
                          htmlFor: "name",
                          value: "Nome Contatto",
                          className: "mb-2 text-xl dark:text-white"
                        }
                      ),
                      /* @__PURE__ */ jsx(
                        TextInput,
                        {
                          type: "text",
                          name: "name",
                          id: "name",
                          required: true,
                          placeholder: "Nome Contatto",
                          value: data.name,
                          onChange: (e) => setData("name", e.target.value),
                          className: `w-full ${errors.name && "border-red-500"}`
                        }
                      ),
                      errors.name && /* @__PURE__ */ jsx(InputError, { message: errors.name })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx(
                        InputLabel,
                        {
                          htmlFor: "email",
                          value: "Indirizzo Email",
                          className: "mb-2 text-xl dark:text-white"
                        }
                      ),
                      /* @__PURE__ */ jsx(
                        TextInput,
                        {
                          type: "email",
                          name: "email",
                          id: "email",
                          required: true,
                          placeholder: "Indirizzo Email",
                          value: data.email,
                          onChange: (e) => setData("email", e.target.value),
                          className: `w-full ${errors.email && "border-red-500"}`
                        }
                      ),
                      errors.email && /* @__PURE__ */ jsx(InputError, { message: errors.email })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx(
                        InputLabel,
                        {
                          htmlFor: "phone",
                          value: "Numero di Telefono",
                          className: "mb-2 text-xl dark:text-white"
                        }
                      ),
                      /* @__PURE__ */ jsx(
                        TextInput,
                        {
                          type: "text",
                          name: "phone",
                          id: "phone",
                          required: true,
                          placeholder: "Numero di Telefono",
                          value: data.phone,
                          onChange: (e) => setData("phone", e.target.value),
                          className: `w-full ${errors.phone && "border-red-500"}`
                        }
                      ),
                      errors.phone && /* @__PURE__ */ jsx(InputError, { message: errors.phone })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx(
                        InputLabel,
                        {
                          htmlFor: "message",
                          value: "Il Tuo Messaggio",
                          className: "mb-2 text-xl dark:text-white"
                        }
                      ),
                      /* @__PURE__ */ jsx(
                        "textarea",
                        {
                          id: "message",
                          name: "message",
                          required: true,
                          placeholder: "Scrivi il tuo messaggio qui...",
                          value: data.message,
                          onChange: (e) => setData("message", e.target.value),
                          className: `mt-1 block w-full resize-none rounded-md border border-gray-300 px-3 py-2 shadow-sm ${errors.message && "border-red-500"}`,
                          rows: "4"
                        }
                      ),
                      errors.message && /* @__PURE__ */ jsx(InputError, { message: errors.message })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center text-black dark:text-white", children: [
                      /* @__PURE__ */ jsx(
                        "input",
                        {
                          type: "checkbox",
                          required: true,
                          checked: data.privacy,
                          onChange: (e) => setData("privacy", e.target.checked),
                          className: "mr-2"
                        }
                      ),
                      /* @__PURE__ */ jsxs(
                        "p",
                        {
                          className: `${errors.privacy && "text-red-500"}`,
                          children: [
                            "Dichiaro di aver preso visione della",
                            " ",
                            /* @__PURE__ */ jsx(
                              "a",
                              {
                                href: "#",
                                className: "inline text-red-500 underline",
                                children: "Privacy Policy"
                              }
                            ),
                            ", pertanto presto il mio consenso al trattamento dei dati per ricevere le informazioni richieste."
                          ]
                        }
                      ),
                      errors.privacy && /* @__PURE__ */ jsx(InputError, { children: errors.privacy })
                    ] }),
                    /* @__PURE__ */ jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsx(
                      "button",
                      {
                        className: "mt-2 w-full rounded-3xl bg-red-800 px-6 py-3 font-semibold text-white shadow-lg transition-colors hover:bg-red-900",
                        disabled: processing,
                        children: "Invia"
                      }
                    ) })
                  ]
                }
              )
            ] })
          ]
        }
      )
    ] })
  ] });
}
const __vite_glob_0_17 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Agency
}, Symbol.toStringTag, { value: "Module" }));
function Contacts() {
  const { flash } = usePage().props;
  const {
    data,
    setData,
    post,
    processing,
    errors,
    wasSuccessful,
    clearErrors,
    reset
  } = useForm({
    name: "",
    email: "",
    phone: "",
    message: "",
    privacy: false
  });
  const submit = (e) => {
    e.preventDefault();
    post(route("contact.generic"), {
      preserveScroll: true,
      preserveState: true,
      onSuccess: () => {
        reset("name", "email", "phone", "message", "privacy");
        clearErrors();
      }
    });
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Head, { children: [
      /* @__PURE__ */ jsx("title", { children: "REMIDA VARESE - Innoviamo con creatività | Contatti" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "" }),
      /* @__PURE__ */ jsx(
        "link",
        {
          rel: "canonical",
          href: "https://remidavarese.it/contatti"
        }
      )
    ] }),
    /* @__PURE__ */ jsxs(PublicLayout, { children: [
      /* @__PURE__ */ jsxs(
        motion.section,
        {
          initial: "hidden",
          animate: "visible",
          variants,
          className: "mt-[100px] grid min-h-fit grid-cols-1 bg-black/60 p-2 md:grid-cols-2 md:p-20 lg:mt-20",
          children: [
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center p-10 text-white", children: [
              /* @__PURE__ */ jsxs("h1", { className: "w-9/12 text-3xl md:text-6xl", children: [
                /* @__PURE__ */ jsx("span", { className: "font-bold", children: "REMIDA VARESE" }),
                /* @__PURE__ */ jsx("br", {})
              ] }),
              /* @__PURE__ */ jsxs("p", { className: "mt-5 text-xl text-white md:w-5/6", children: [
                "Il",
                " ",
                /* @__PURE__ */ jsx(
                  "a",
                  {
                    href: "https://it.wikipedia.org/wiki/Chiostro_di_Voltorre",
                    target: "_blank",
                    rel: "noreferrer",
                    className: "text-white underline",
                    children: "Chiostro di Voltorre"
                  }
                ),
                " ",
                "a Gavirate (VA) è un monastero benedettino del XII secolo in stile romanico. Ospita da oltre dieci anni i contesti ludici di apprendimento di ReMida Varese."
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "mt-10 grid grid-cols-2 gap-10 text-6xl text-red-500", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center", children: [
                  /* @__PURE__ */ jsx(FaMapMarkerAlt, {}),
                  /* @__PURE__ */ jsxs("p", { className: "mt-5 text-lg text-white", children: [
                    "c/o Chiostro di Voltorre ",
                    /* @__PURE__ */ jsx("br", {}),
                    " Via S. Michele ",
                    /* @__PURE__ */ jsx("br", {}),
                    "21026 Gavirate (VA)"
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-items-start", children: [
                  /* @__PURE__ */ jsx(IoIosMail, {}),
                  /* @__PURE__ */ jsx(
                    "a",
                    {
                      href: "mailto:info@remidavarese.it",
                      className: "mt-5 text-lg text-white underline",
                      children: "info@remidavarese.it"
                    }
                  )
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "mt-20", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto w-full p-5 md:w-10/12 md:p-0", children: [
              wasSuccessful && /* @__PURE__ */ jsx("div", { className: "mb-5 w-full rounded-lg bg-emerald-500 p-5 text-center text-white", children: flash.message }),
              /* @__PURE__ */ jsxs(
                "form",
                {
                  className: "space-y-3 rounded-xl bg-gray-200 p-10 text-black shadow-lg dark:bg-slate-600",
                  onSubmit: submit,
                  children: [
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx(
                        InputLabel,
                        {
                          htmlFor: "name",
                          className: "mb-2 text-xl dark:text-white",
                          children: "Nome Contatto"
                        }
                      ),
                      /* @__PURE__ */ jsx(
                        TextInput,
                        {
                          type: "text",
                          name: "name",
                          id: "name",
                          required: true,
                          placeholder: "Nome Contatto",
                          value: data.name,
                          onChange: (e) => setData("name", e.target.value),
                          className: `w-full ${errors.name && "border-red-500"}`
                        }
                      ),
                      errors.name && /* @__PURE__ */ jsx(InputError, { message: errors.name })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx(
                        InputLabel,
                        {
                          htmlFor: "email",
                          className: "mb-2 text-xl dark:text-white",
                          children: "Indirizzo Email"
                        }
                      ),
                      /* @__PURE__ */ jsx(
                        TextInput,
                        {
                          type: "email",
                          name: "email",
                          id: "email",
                          required: true,
                          placeholder: "Indirizzo Email",
                          value: data.email,
                          onChange: (e) => setData("email", e.target.value),
                          className: `w-full ${errors.email && "border-red-500"}`
                        }
                      ),
                      errors.email && /* @__PURE__ */ jsx(InputError, { message: errors.email })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx(
                        InputLabel,
                        {
                          htmlFor: "phone",
                          className: "mb-2 text-xl dark:text-white",
                          children: "Numero di Telefono"
                        }
                      ),
                      /* @__PURE__ */ jsx(
                        TextInput,
                        {
                          type: "text",
                          name: "phone",
                          id: "phone",
                          required: true,
                          placeholder: "Numero di Telefono",
                          value: data.phone,
                          onChange: (e) => setData("phone", e.target.value),
                          className: `w-full ${errors.phone && "border-red-500"}`
                        }
                      ),
                      errors.phone && /* @__PURE__ */ jsx(InputError, { message: errors.phone })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx(
                        InputLabel,
                        {
                          htmlFor: "message",
                          className: "mb-2 text-xl dark:text-white",
                          children: "Il Tuo Messaggio"
                        }
                      ),
                      /* @__PURE__ */ jsx(
                        "textarea",
                        {
                          id: "message",
                          name: "message",
                          required: true,
                          placeholder: "Scrivi il tuo messaggio qui...",
                          value: data.message,
                          onChange: (e) => setData("message", e.target.value),
                          className: `mt-1 block w-full resize-none rounded-md border border-gray-300 px-3 py-2 shadow-sm ${errors.message && "border-red-500"}`,
                          rows: "4"
                        }
                      ),
                      errors.message && /* @__PURE__ */ jsx(InputError, { message: errors.message })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center text-black dark:text-white", children: [
                      /* @__PURE__ */ jsx(
                        "input",
                        {
                          type: "checkbox",
                          required: true,
                          checked: data.privacy,
                          onChange: (e) => setData("privacy", e.target.checked),
                          className: "mr-2"
                        }
                      ),
                      /* @__PURE__ */ jsxs(
                        "p",
                        {
                          className: `${errors.privacy && "text-red-500"}`,
                          children: [
                            "Dichiaro di aver preso visione della",
                            " ",
                            /* @__PURE__ */ jsx(
                              "a",
                              {
                                href: "#",
                                className: "inline text-red-500 underline",
                                children: "Privacy Policy"
                              }
                            ),
                            ", pertanto presto il mio consenso al trattamento dei dati per ricevere le informazioni richieste."
                          ]
                        }
                      ),
                      errors.privacy && /* @__PURE__ */ jsx(InputError, { children: errors.privacy })
                    ] }),
                    /* @__PURE__ */ jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsx(
                      "button",
                      {
                        className: "mt-2 w-full rounded-3xl bg-red-800 px-6 py-3 font-semibold text-white shadow-lg transition-colors hover:bg-red-900",
                        disabled: processing,
                        children: "Invia"
                      }
                    ) })
                  ]
                }
              )
            ] }) })
          ]
        }
      ),
      /* @__PURE__ */ jsx(
        motion.section,
        {
          initial: "hidden",
          animate: "visible",
          variants,
          children: /* @__PURE__ */ jsx("div", { className: "h-[65vh] w-full", children: /* @__PURE__ */ jsx(
            "iframe",
            {
              className: "h-[65vh] w-full",
              src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3297.5070175352453!2d8.731766776622383!3d45.833361408731534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786792be1c69103%3A0x343281f25d94a7ca!2sChiostro%20di%20Voltorre!5e1!3m2!1sit!2sit!4v1724407744334!5m2!1sit!2sit"
            }
          ) })
        }
      )
    ] })
  ] });
}
const __vite_glob_0_18 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Contacts
}, Symbol.toStringTag, { value: "Module" }));
function Emporium() {
  const { flash } = usePage().props;
  const {
    data,
    setData,
    post,
    processing,
    errors,
    wasSuccessful,
    clearErrors,
    reset
  } = useForm({
    name: "",
    email: "",
    phone: "",
    message: "",
    privacy: false
  });
  const submit = (e) => {
    e.preventDefault();
    post(route("contact.emporium"), {
      preserveScroll: true,
      preserveState: true,
      onSuccess: () => {
        reset("name", "email", "phone", "message", "privacy");
        clearErrors();
      }
    });
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Head, { children: [
      /* @__PURE__ */ jsx("title", { children: "REMIDA VARESE - Innoviamo con creatività | Emporio dei Materiali" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "" }),
      /* @__PURE__ */ jsx(
        "link",
        {
          rel: "canonical",
          href: "https://remidavarese.it/emporio-dei-materiali"
        }
      )
    ] }),
    /* @__PURE__ */ jsxs(PublicLayout, { children: [
      /* @__PURE__ */ jsxs("section", { className: "mt-[110px] grid h-screen grid-cols-1 bg-black/60 p-5 md:grid-cols-3 md:p-0 lg:mt-0", children: [
        /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center text-white", children: /* @__PURE__ */ jsxs(
          motion.h1,
          {
            initial: "hidden",
            animate: "visible",
            variants,
            className: "w-9/12 py-5 text-3xl md:text-6xl",
            children: [
              /* @__PURE__ */ jsx("span", { className: "font-bold", children: "Emporio" }),
              /* @__PURE__ */ jsx("p", { className: "mt-5 text-xl md:text-2xl", children: "Remida Varese recupera dalle aziende, da artigiani, da commercianti materiali in eccedenza e/o destinati allo smaltimento, li espone nell’emporio dei materiali per metterli a disposizione di scuole, associazioni ed enti non a scopo di lucro per attività e progetti socio-educativi o culturali." })
            ]
          }
        ) }),
        /* @__PURE__ */ jsx("div", { className: "col-span-2", children: /* @__PURE__ */ jsx(
          "img",
          {
            className: "h-screen w-full object-cover opacity-90",
            src: "/images/emporium.webp",
            alt: ""
          }
        ) })
      ] }),
      /* @__PURE__ */ jsxs(
        motion.section,
        {
          initial: "hidden",
          whileInView: "visible",
          viewport: { once: true },
          variants,
          className: "grid grid-cols-1 bg-transparent md:grid-cols-2 dark:bg-slate-600",
          children: [
            /* @__PURE__ */ jsxs("div", { className: "rounded-lg border-2 border-red-200 bg-slate-600 p-10 text-2xl text-white", children: [
              /* @__PURE__ */ jsx("h2", { className: "mb-10 text-center text-6xl", children: "Emporio dei Materiali" }),
              /* @__PURE__ */ jsxs("p", { children: [
                "In uno spazio apposito presso il Chiostro di Voltorre è stato allestito l’Emporio dei materiali, dove esponiamo con cura",
                " ",
                /* @__PURE__ */ jsx("strong", { children: "diverse tipologie di scarti" }),
                ": stoffe e filati (cotone, lana, seta, cordame sintetico, pizzi, nastri, passamaneria), plastica e derivati (rocchetti, tubi di varie dimensioni, plexiglass, policarbonati, nylon, acetati, prestrusi, gomma piuma, profilati in gomma spugna, imballaggi, contenitori), carta e cartone (fogli di varie dimensioni, rotoli, ritagli, prove di stampa), legno (profili, rimanenze di taglio al laser, pannelli, assi, telai)."
              ] }),
              /* @__PURE__ */ jsxs("p", { className: "mt-5", children: [
                "Sono disponibili anche",
                " ",
                /* @__PURE__ */ jsx("strong", { children: "accessori di supporto alle attività educative e creative" }),
                ", come moquette in agugliato recuperate dopo l’uso, tavoli luminosi di varie dimensioni realizzati da scarti di imballaggi in legno, strutture per travasi, pannelli magnetici da parete, pedane, ecc.."
              ] }),
              /* @__PURE__ */ jsxs("p", { className: "mt-5", children: [
                /* @__PURE__ */ jsx("strong", { children: "Possono prelevare materiali dall’emporio solo associati" }),
                ", previa iscrizione ad Altrementi aps (vedi form di domanda di iscrizione)"
              ] }),
              /* @__PURE__ */ jsx("p", { className: "mt-5 uppercase", children: /* @__PURE__ */ jsx("strong", { children: "Modalità di Prelievo" }) }),
              /* @__PURE__ */ jsxs("ul", { className: "mt-5", children: [
                /* @__PURE__ */ jsxs("li", { children: [
                  "Gli associati possono prelevare i diversi materiali presenti dopo aver prenotato una visita scrivendo a",
                  " ",
                  /* @__PURE__ */ jsx("a", { href: "mailto:emporio@remidavarese.it", children: "emporio@remidavarese.it" }),
                  " ",
                  ",",
                  " ",
                  /* @__PURE__ */ jsx("strong", { children: "condividendo il progetto che sta alla base della richiesta di prelievo" }),
                  "."
                ] }),
                /* @__PURE__ */ jsx("li", { children: "Si concorda a grandi linee tipo e quantità di materiali da asportare, visto che le disponibilità variano da periodo a periodo." }),
                /* @__PURE__ */ jsx("li", { children: "Per il trasporto dei materiali è necessario dotarsi di contenitori idonei." }),
                /* @__PURE__ */ jsx("li", { children: "Si richiede un contributo economico per ogni prelievo di materiali." })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "rounded-lg border-2 border-red-200 bg-slate-300 p-10 text-2xl text-black dark:bg-slate-400", children: [
              /* @__PURE__ */ jsx("h2", { className: "mb-10 text-center text-6xl", children: "Materiali non Strutturati e Materiali Destrutturati" }),
              /* @__PURE__ */ jsxs("p", { children: [
                "Il ruolo fondamentale dei materiali sta nella",
                " ",
                /* @__PURE__ */ jsx("strong", { children: "crescita cognitiva, sociale ed emotiva" }),
                " ",
                "che il bambino vive nella partecipazione ad attività creative, inseriti in contesti ludico/educativi adeguati."
              ] }),
              /* @__PURE__ */ jsxs("p", { className: "mt-5", children: [
                "Spazi, o meglio ",
                /* @__PURE__ */ jsx("strong", { children: "contesti" }),
                ", articolati in ",
                /* @__PURE__ */ jsx("strong", { children: "centri di interesse" }),
                " ",
                "per sostenere l’incontro a piccolo gruppo e per offrire plurime e diversificate possibilità di esplorazione e scoperta nell’incontro con diversi linguaggi, permettendo così ai bambini di esprimersi attraverso le proprie competenze uniche e soggettive."
              ] }),
              /* @__PURE__ */ jsxs("p", { className: "mt-5", children: [
                "Nell’ampio spettro dei materiali, si distinguono i",
                " ",
                /* @__PURE__ */ jsx("strong", { children: "materiali" }),
                " strutturati da quelli",
                " ",
                /* @__PURE__ */ jsx("strong", { children: "non strutturati" }),
                ": i primi sono costituiti da elementi legati tra loro da una precisa rete di relazioni, i secondi sono",
                " ",
                /* @__PURE__ */ jsx("strong", { children: "quelli che permettono di spaziare, fantasticare e immaginare, in quanto non rimandano ad un singolo significato o a funzioni specifiche" }),
                "."
              ] }),
              /* @__PURE__ */ jsxs("p", { className: "mt-5", children: [
                "A questa distinzione si aggiunge il",
                " ",
                /* @__PURE__ */ jsx("strong", { children: "materiale di scarto industriale" }),
                ", che ha diverse caratteristiche aggiuntive per le quali si parla di ",
                /* @__PURE__ */ jsx("strong", { children: "destrutturazione" }),
                ", ovvero",
                " ",
                /* @__PURE__ */ jsx("strong", { children: "l’assenza di un’accezione precedente a quella che può essere data, il non essere mai stati usati e la grande quantità con cui vengono proposti" }),
                "."
              ] }),
              /* @__PURE__ */ jsxs("p", { className: "mt-5", children: [
                "Chiara Todeschini e Roberta Vercesi (2017),",
                " ",
                /* @__PURE__ */ jsx("em", { children: "Materiali inusuali e creatività" }),
                ", in Monica Guerra (a cura di) Materie Intelligenti, Ed. Junior, Parma"
              ] })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        motion.section,
        {
          initial: "hidden",
          whileInView: "visible",
          viewport: { once: true },
          variants,
          className: "grid place-items-center p-2 md:p-10 dark:bg-slate-500 dark:text-white",
          children: [
            /* @__PURE__ */ jsx("div", { className: "", children: /* @__PURE__ */ jsx("h2", { className: "mb-10 text-6xl", children: "Contattaci" }) }),
            /* @__PURE__ */ jsxs("div", { className: "mx-auto w-full p-5 md:w-5/12 md:p-0", children: [
              wasSuccessful && /* @__PURE__ */ jsx("div", { className: "mb-5 w-full rounded-lg bg-emerald-500 p-5 text-center text-white", children: flash.message }),
              /* @__PURE__ */ jsxs(
                "form",
                {
                  className: "space-y-3 rounded-xl bg-gray-200 p-10 text-black shadow-lg dark:bg-slate-600",
                  onSubmit: submit,
                  children: [
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx(
                        InputLabel,
                        {
                          htmlFor: "name",
                          value: "Nome Contatto",
                          className: "mb-2 text-xl dark:text-white"
                        }
                      ),
                      /* @__PURE__ */ jsx(
                        TextInput,
                        {
                          type: "text",
                          name: "name",
                          id: "name",
                          required: true,
                          placeholder: "Nome Contatto",
                          value: data.name,
                          onChange: (e) => setData("name", e.target.value),
                          className: `w-full ${errors.name && "border-red-500"}`
                        }
                      ),
                      errors.name && /* @__PURE__ */ jsx(InputError, { message: errors.name })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx(
                        InputLabel,
                        {
                          htmlFor: "email",
                          value: "Indirizzo Email",
                          className: "mb-2 text-xl dark:text-white"
                        }
                      ),
                      /* @__PURE__ */ jsx(
                        TextInput,
                        {
                          type: "email",
                          name: "email",
                          id: "email",
                          required: true,
                          placeholder: "Indirizzo Email",
                          value: data.email,
                          onChange: (e) => setData("email", e.target.value),
                          className: `w-full ${errors.email && "border-red-500"}`
                        }
                      ),
                      errors.email && /* @__PURE__ */ jsx(InputError, { message: errors.email })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx(
                        InputLabel,
                        {
                          htmlFor: "phone",
                          value: "Numero di Telefono",
                          className: "mb-2 text-xl dark:text-white"
                        }
                      ),
                      /* @__PURE__ */ jsx(
                        TextInput,
                        {
                          type: "text",
                          name: "phone",
                          id: "phone",
                          required: true,
                          placeholder: "Numero di Telefono",
                          value: data.phone,
                          onChange: (e) => setData("phone", e.target.value),
                          className: `w-full ${errors.phone && "border-red-500"}`
                        }
                      ),
                      errors.phone && /* @__PURE__ */ jsx(InputError, { message: errors.phone })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx(
                        InputLabel,
                        {
                          htmlFor: "message",
                          value: "Il Tuo Messaggio",
                          className: "mb-2 text-xl dark:text-white"
                        }
                      ),
                      /* @__PURE__ */ jsx(
                        "textarea",
                        {
                          id: "message",
                          name: "message",
                          required: true,
                          placeholder: "Scrivi il tuo messaggio qui...",
                          value: data.message,
                          onChange: (e) => setData("message", e.target.value),
                          className: `mt-1 block w-full resize-none rounded-md border border-gray-300 px-3 py-2 shadow-sm ${errors.message && "border-red-500"}`,
                          rows: "4"
                        }
                      ),
                      errors.message && /* @__PURE__ */ jsx(InputError, { message: errors.message })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center text-black dark:text-white", children: [
                      /* @__PURE__ */ jsx(
                        "input",
                        {
                          type: "checkbox",
                          required: true,
                          checked: data.privacy,
                          onChange: (e) => setData("privacy", e.target.checked),
                          className: "mr-2"
                        }
                      ),
                      /* @__PURE__ */ jsxs(
                        "p",
                        {
                          className: `${errors.privacy && "text-red-500"}`,
                          children: [
                            "Dichiaro di aver preso visione della",
                            " ",
                            /* @__PURE__ */ jsx(
                              "a",
                              {
                                href: "#",
                                className: "inline text-red-500 underline",
                                children: "Privacy Policy"
                              }
                            ),
                            ", pertanto presto il mio consenso al trattamento dei dati per ricevere le informazioni richieste."
                          ]
                        }
                      ),
                      errors.privacy && /* @__PURE__ */ jsx(InputError, { children: errors.privacy })
                    ] }),
                    /* @__PURE__ */ jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsx(
                      "button",
                      {
                        className: "mt-2 w-full rounded-3xl bg-red-800 px-6 py-3 font-semibold text-white shadow-lg transition-colors hover:bg-red-900",
                        disabled: processing,
                        children: "Invia"
                      }
                    ) })
                  ]
                }
              )
            ] })
          ]
        }
      )
    ] })
  ] });
}
const __vite_glob_0_19 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Emporium
}, Symbol.toStringTag, { value: "Module" }));
function EventShow({ event }) {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Head, { children: [
      /* @__PURE__ */ jsx("title", { children: `REMIDA VARESE - Innoviamo con creatività | ${event.title}` }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "" }),
      /* @__PURE__ */ jsx(
        "link",
        {
          rel: "canonical",
          href: `https://remidavarese.it/${event.slug}`
        }
      )
    ] }),
    /* @__PURE__ */ jsx(PublicLayout, { children: /* @__PURE__ */ jsx("section", { className: "my-[150px] grid grid-cols-1 place-items-center gap-10 p-5", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl rounded-lg bg-gray-200 shadow-lg dark:bg-gray-600 dark:text-white", children: [
      /* @__PURE__ */ jsx("div", { className: "flex justify-center p-5", children: /* @__PURE__ */ jsx(
        "img",
        {
          className: "w-full rounded-lg object-cover shadow-lg",
          src: event.image_url,
          alt: event.title
        }
      ) }),
      /* @__PURE__ */ jsx("div", { className: "p-5 text-center", children: /* @__PURE__ */ jsx("h2", { className: "text-4xl font-bold uppercase", children: event.title }) }),
      /* @__PURE__ */ jsx(
        "div",
        {
          className: "px-5 py-10 text-xl md:px-16",
          dangerouslySetInnerHTML: {
            __html: DOMPurify.sanitize(event.description)
          }
        }
      )
    ] }) }) })
  ] });
}
const __vite_glob_0_20 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: EventShow
}, Symbol.toStringTag, { value: "Module" }));
function Events({ events }) {
  console.log(events);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Head, { children: [
      /* @__PURE__ */ jsx("title", { children: "REMIDA VARESE - Innoviamo con creatività | Eventi" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "" }),
      /* @__PURE__ */ jsx(
        "link",
        {
          rel: "canonical",
          href: "https://remidavarese.it/eventi"
        }
      )
    ] }),
    /* @__PURE__ */ jsxs(PublicLayout, { children: [
      events.length == 0 && /* @__PURE__ */ jsx("div", { className: "grid h-screen w-full place-items-center dark:bg-slate-900 dark:text-white", children: /* @__PURE__ */ jsx("p", { className: "text-2xl", children: "Non sono ancora presenti Eventi." }) }),
      events.length > 0 && /* @__PURE__ */ jsx("section", { className: "grid grid-cols-1 gap-5 bg-gray-300 p-5 py-[150px] md:grid-cols-5 dark:bg-slate-900 dark:text-white", children: events.map((event) => /* @__PURE__ */ jsxs(
        "div",
        {
          className: "rounded-lg bg-gray-200 shadow-lg dark:bg-gray-700",
          children: [
            /* @__PURE__ */ jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsx(
              "img",
              {
                className: "w-full rounded-lg object-cover",
                src: event.image_url,
                alt: event.title
              }
            ) }),
            /* @__PURE__ */ jsx("div", { className: "text-center", children: /* @__PURE__ */ jsx("h2", { className: "pt-5 text-2xl font-bold uppercase", children: event.title }) }),
            /* @__PURE__ */ jsx(
              "div",
              {
                className: "py-5 text-center text-xl",
                dangerouslySetInnerHTML: {
                  __html: DOMPurify.sanitize(
                    event.description.substring(0, 100)
                  )
                }
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "grid place-items-center pb-5", children: /* @__PURE__ */ jsx(
              Link,
              {
                href: route(
                  "public.event.show",
                  event.slug
                ),
                className: "rounded-3xl bg-red-800 px-5 py-2 text-white transition-colors hover:bg-red-900",
                children: "Continua a Leggere"
              }
            ) })
          ]
        },
        event.id
      )) })
    ] })
  ] });
}
const __vite_glob_0_21 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Events
}, Symbol.toStringTag, { value: "Module" }));
function Expertise() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Head, { children: [
      /* @__PURE__ */ jsx("title", { children: "REMIDA VARESE - Innoviamo con creatività | Cosa Facciamo" }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "description",
          content: "Remida Varese connette con le proprie attività mondi differenti quali la scuola, l’imprenditoria, il terzo settore, le istituzioni locali, la cultura."
        }
      ),
      /* @__PURE__ */ jsx(
        "link",
        {
          rel: "canonical",
          href: "https://remidavarese.it/cosa-facciamo"
        }
      )
    ] }),
    /* @__PURE__ */ jsxs(PublicLayout, { children: [
      /* @__PURE__ */ jsxs("section", { className: "mt-[110px] grid h-screen grid-cols-1 bg-black/60 md:grid-cols-3 md:p-0 lg:mt-0", children: [
        /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center text-white", children: /* @__PURE__ */ jsxs(
          motion.h1,
          {
            initial: "hidden",
            animate: "visible",
            variants,
            className: "w-9/12 py-5 text-3xl md:text-6xl",
            children: [
              /* @__PURE__ */ jsx("span", { className: "font-bold", children: "Cosa Facciamo" }),
              /* @__PURE__ */ jsx("br", {}),
              /* @__PURE__ */ jsx("p", { className: "mt-5 text-xl md:text-2xl", children: "Remida Varese connette con le proprie attività mondi differenti quali la scuola, l’imprenditoria, il terzo settore, le istituzioni locali, la cultura. Abbiamo progetti da proporre, vogliamo accogliere nuove idee e collaborazioni." })
            ]
          }
        ) }),
        /* @__PURE__ */ jsx("div", { className: "col-span-2", children: /* @__PURE__ */ jsx(
          "img",
          {
            className: "h-screen w-full object-cover opacity-90",
            src: "/images/expertise.webp",
            alt: ""
          }
        ) })
      ] }),
      /* @__PURE__ */ jsxs(
        motion.section,
        {
          initial: "hidden",
          whileInView: "visible",
          viewport: { once: true },
          variants,
          className: "grid grid-cols-1 bg-transparent md:grid-cols-2 dark:bg-slate-600",
          children: [
            /* @__PURE__ */ jsxs("div", { className: "rounded-lg border-2 border-red-200 bg-slate-600 p-10 text-center text-white", children: [
              /* @__PURE__ */ jsx(
                "img",
                {
                  src: "/images/Nero.png",
                  alt: "Fantasmino Nero",
                  className: "mx-auto mb-5 w-20"
                }
              ),
              /* @__PURE__ */ jsx("h2", { className: "mb-10 text-6xl", children: "Laboratori per Scuole" }),
              /* @__PURE__ */ jsx("p", { className: "text-2xl", children: "I laboratori di Remida Varese non sono solo spazi fisici, ma anche spazi mentali dove è possibile un’educazione alla creatività intesa come capacità di liberarsi dai condizionamenti per stabilire nuove relazioni con le cose che si conoscono, dove si sposta l’attenzione sui processi realizzativi piuttosto che sui prodotti che vengono creati." }),
              /* @__PURE__ */ jsx(ButtonLink, { light: true, href: route("laboratories"), children: "Scopri di più" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "rounded-lg border-2 border-red-200 bg-slate-300 p-10 text-center text-black dark:bg-slate-400", children: [
              /* @__PURE__ */ jsx(
                "img",
                {
                  src: "/images/Grigio.png",
                  alt: "Fantasmino Grigio",
                  className: "mx-auto mb-5 w-20"
                }
              ),
              /* @__PURE__ */ jsx("h2", { className: "mb-10 text-6xl", children: "Formazione" }),
              /* @__PURE__ */ jsx("p", { className: "text-2xl", children: "Per Remida Varese è una priorità la condivisione delle conoscenze e delle competenze acquisite negli anni di attività in dialogo con il territorio e la comunità che lo vive." }),
              /* @__PURE__ */ jsx(ButtonLink, { href: route("training"), children: "Scopri di più" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "rounded-lg border-2 border-red-200 bg-slate-300 p-10 text-center text-black dark:bg-slate-400", children: [
              /* @__PURE__ */ jsx(
                "img",
                {
                  src: "/images/Blu.png",
                  alt: "Fantasmino Blu",
                  className: "mx-auto mb-5 w-20"
                }
              ),
              /* @__PURE__ */ jsx("h2", { className: "mb-10 text-6xl", children: "Emporio dei Materiali" }),
              /* @__PURE__ */ jsx("p", { className: "text-2xl", children: "Remida Varese recupera dalle aziende, da artigiani, da commercianti materiali in eccedenza e/o destinati allo smaltimento, li espone nell’emporio dei materiali per metterli a disposizione di scuole, associazioni ed enti non a scopo di lucro per attività e progetti socio-educativi o culturali." }),
              /* @__PURE__ */ jsx(ButtonLink, { href: route("emporium"), children: "Scopri di più" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "rounded-lg border-2 border-red-200 bg-slate-600 p-10 text-center text-white", children: [
              /* @__PURE__ */ jsx(
                "img",
                {
                  src: "/images/Verde.png",
                  alt: "Fantasmino Verde",
                  className: "mx-auto mb-5 w-20"
                }
              ),
              /* @__PURE__ */ jsx("h2", { className: "mb-10 text-6xl", children: "Laboratori per Altri Enti" }),
              /* @__PURE__ */ jsx("p", { className: "text-2xl", children: "I nostri laboratori creativi di sensibilizzazione alla sostenibilità ambientale per famiglie si possono realizzare durante manifestazioni ed eventi pubblici organizzati da Enti Locali, Pro Loco, Associazioni ecc. e presso le sedi di organizzazioni come Comunità, Centri diurni, RSA, Fondazioni ecc. per ospiti con disabilità, anziani, minori ecc.." }),
              /* @__PURE__ */ jsx(ButtonLink, { light: true, href: route("other"), children: "Scopri di più" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "rounded-lg border-2 border-red-200 bg-slate-600 p-10 text-center text-white", children: [
              /* @__PURE__ */ jsx(
                "img",
                {
                  src: "/images/Viola.png",
                  alt: "Fantasmino Viola",
                  className: "mx-auto mb-5 w-20"
                }
              ),
              /* @__PURE__ */ jsx("h2", { className: "mb-10 text-6xl", children: "Aziende" }),
              /* @__PURE__ */ jsx("p", { className: "text-2xl", children: "La fonte delle nostre proposte sono i materiali che recuperiamo gratuitamente dalle realtà industriali, artigianali e commerciali del territorio. Siamo sempre alla ricerca di nuove collaborazioni per trasformare insieme gli scarti di produzione, le rimanenze di magazzino, le eccedenze e altri materiali esclusi dalla commercializzazione in preziose risorse per la comunità, senza fini di lucro." }),
              /* @__PURE__ */ jsx(ButtonLink, { light: true, href: route("agency"), children: "Scopri di più" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "rounded-lg border-2 border-red-200 bg-slate-300 p-10 text-center text-black dark:bg-slate-400", children: [
              /* @__PURE__ */ jsx(
                "img",
                {
                  src: "/images/Arancio.png",
                  alt: "Fantasmino Arancio",
                  className: "mx-auto mb-5 w-20"
                }
              ),
              /* @__PURE__ */ jsx("h2", { className: "mb-10 text-6xl", children: "Progetti Speciali" }),
              /* @__PURE__ */ jsx("p", { className: "text-2xl", children: "Installazioni interattive, creazioni artistiche e laboratori creati su misura, in collaborazione con vari Enti, per rendere unico l’evento a cui partecipiamo e promuovere contemporaneamente la sostenibilità ambientale, in quanto il materiale utilizzato è esclusivamente scarto aziendale o artigianale." }),
              /* @__PURE__ */ jsx(ButtonLink, { href: route("special"), children: "Scopri di più" })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsx(
        motion.section,
        {
          initial: "hidden",
          whileInView: "visible",
          viewport: { once: true },
          variants,
          className: "bg-transparent py-10 dark:bg-slate-600",
          children: /* @__PURE__ */ jsxs("div", { className: "mx-auto flex max-w-7xl flex-col items-center justify-center text-2xl dark:text-white", children: [
            /* @__PURE__ */ jsx("h2", { className: "pb-10 text-6xl", children: "Riferimenti Culturali Pedagogici" }),
            /* @__PURE__ */ jsxs("div", { className: "grid max-w-7xl grid-cols-1 justify-items-center gap-10 md:grid-cols-4", children: [
              /* @__PURE__ */ jsx(
                Avatar,
                {
                  source: "/images/JD.webp",
                  href: "https://it.wikipedia.org/wiki/John_Dewey",
                  anchorText: "John Dewey",
                  className: "border-slate-700",
                  description: "Considerato il fondatore del pragmatismo educativo, ha sviluppato una concezione dell'esperienza come rapporto tra uomo e ambiente, dove l'uomo non è uno spettatore passivo, ma interagisce con ciò che lo circonda. L'educazione deve aprire la via a nuove esperienze ed al potenziamento di tutte le opportunità per uno sviluppo ulteriore. Secondo lui la creatività è educabile, e contesti formativi nei quali sia prevista e promossa la divergenza, intesa anche solo come possibilità/necessità di non adeguarsi a comportamenti standardizzati e univoci, sono capaci di allenare e rinforzare atteggiamenti e comportamenti creativi. Ha coniato il concetto dell’”imparare facendo”."
                }
              ),
              /* @__PURE__ */ jsx(
                Avatar,
                {
                  source: "/images/VLS.webp",
                  href: "https://www.stateofmind.it/bibliography/vygotskij-lev-semenovic/",
                  anchorText: "Lev S. Vygotskij",
                  className: "border-slate-700",
                  description: "Psicologo e pedagogista russo, promuove l’idea che l’apprendimento è un processo sociale e collaborativo. Gli individui imparano attraverso l’interazione con gli altri, attraverso la discussione e la risoluzione dei problemi insieme. Afferma inoltre che l’Immaginazione e la creatività nell’età infantile si combinano in forme nuove di elementi provenienti dall’esperienza, ritrasformando i dati di realtà con una nuova forza attiva."
                }
              ),
              /* @__PURE__ */ jsx(
                Avatar,
                {
                  source: "/images/LM.webp",
                  href: "https://www.reggiochildren.it/reggio-emilia-approach/loris-malaguzzi/",
                  anchorText: "Loris Malaguzzi",
                  className: "border-slate-700",
                  description: "Ha creato la teoria del gioco dei bambini, che intende l'azione del gioco come un processo attraverso il quale si impara dall'ambiente e attraverso l'esperienza. La teoria afferma che il modo più efficace per gli educatori di aiutare i bambini a imparare è creare un ambiente in cui si sentano liberi di esplorare, sperimentare e giocare con diversi materiali quotidiani utilizzando un approccio creativo. Nel 1968 Loris Malaguzzi fonda il Reggio Emilia approach, che mette al centro il bambino stesso come elemento principale dell'educazione primaria. Il Reggio Emilia Approach afferma che i bambini sono attivamente coinvolti nel proprio processo di apprendimento e che questo può essere supportato dagli adulti che lavorano con loro. Lo scopo di questo metodo era quello di fornire un approccio più pratico e centrato sul bambino."
                }
              ),
              /* @__PURE__ */ jsx(
                Avatar,
                {
                  source: "/images/EG.webp",
                  href: "https://www.elinoreducare.org/elinor-goldschmied/",
                  anchorText: "Elinor Violet Sinnott Goldschmied",
                  className: "border-slate-700",
                  description: "Educatrice e pedagogista britannica che ha vissuto e lavorato anche in Italia, teorizza e definisce il “gioco euristico”: attività di esplorazione e ricerca che permette ai bambini del nido, in totale autonomia, attraverso prove ed errori, di sperimentare e mettere in relazione un insieme di materiali, indagando in questo modo le proprietà e le possibili combinazioni. Goldsmchied è teorica anche del noto “cestino dei tesori”, il naturale precursore del gioco euristico."
                }
              ),
              /* @__PURE__ */ jsx(
                Avatar,
                {
                  source: "/images/BM.webp",
                  href: "https://www.treccani.it/enciclopedia/bruno-munari/",
                  anchorText: "Bruno Munari",
                  className: "border-slate-700",
                  description: "Uno dei massimi protagonisti dell’arte, del design e della grafica del XX secolo che – come spiega l’enciclopedia Treccani nella voce a lui dedicata – ha mantenuto inalterata la sua estrosità creativa a sostegno dell’indagine costruttiva della forma attraverso sperimentazioni visive e tattili e, insieme, la sua grande capacità di comunicarla con parole, oggetti, giocattoli."
                }
              ),
              /* @__PURE__ */ jsx(
                Avatar,
                {
                  source: "/images/GR.webp",
                  href: "https://100giannirodari.com/",
                  anchorText: "Gianni Rodari",
                  className: "border-slate-700",
                  description: "Nel suo libro “La grammatica della fantasia” introduce ai processi della fantasia e delle regole della creazione per renderne l’uso accessibile a tutti. L’autore non consegna però un ricettario per costruire storie, ma offre materia prima, idee, occasioni, riflessioni utilissime per superare la muraglia della routine scolastica e per riconoscere il ruolo fondamentale della creatività all’interno del processo educativo."
                }
              )
            ] })
          ] })
        }
      )
    ] })
  ] });
}
const __vite_glob_0_22 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Expertise
}, Symbol.toStringTag, { value: "Module" }));
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const Card$1 = memo(({ card, index, hovered, setHovered }) => /* @__PURE__ */ jsxs(
  "div",
  {
    onMouseEnter: () => setHovered(index),
    onMouseLeave: () => setHovered(null),
    className: cn(
      "relative h-60 w-full overflow-hidden rounded-lg bg-gray-100 transition-all duration-300 ease-out md:h-96 dark:bg-neutral-900",
      hovered !== null && hovered !== index && "scale-[0.98] blur-sm"
    ),
    children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          src: card.src,
          alt: card.title,
          className: "absolute inset-0 object-cover"
        }
      ),
      /* @__PURE__ */ jsx(
        "div",
        {
          className: cn(
            "absolute inset-0 flex items-end bg-black/50 px-4 py-8 transition-opacity duration-300",
            hovered === index ? "opacity-100" : "opacity-0"
          ),
          children: /* @__PURE__ */ jsx("div", { className: "bg-gradient-to-b from-neutral-50 to-neutral-200 bg-clip-text text-xl font-medium text-transparent md:text-2xl", children: card.title })
        }
      )
    ]
  }
));
Card$1.displayName = "Card";
function FocusCards({ cards }) {
  const [hovered, setHovered] = useState(null);
  return /* @__PURE__ */ jsx("div", { className: "mx-auto grid w-full max-w-5xl grid-cols-1 gap-10 md:grid-cols-3 md:px-8", children: cards.map((card, index) => /* @__PURE__ */ jsx(
    Card$1,
    {
      card,
      index,
      hovered,
      setHovered
    },
    card.id
  )) });
}
function Gallery({ images }) {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Head, { children: [
      /* @__PURE__ */ jsx("title", { children: "REMIDA VARESE - Innoviamo con creatività | Gallery" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "" }),
      /* @__PURE__ */ jsx(
        "link",
        {
          rel: "canonical",
          href: "https://remidavarese.it/gallery"
        }
      )
    ] }),
    /* @__PURE__ */ jsx(PublicLayout, { children: /* @__PURE__ */ jsx("section", { className: "grid place-items-center bg-gray-400 py-[150px] dark:bg-slate-700", children: /* @__PURE__ */ jsx(FocusCards, { cards: images }) }) })
  ] });
}
const __vite_glob_0_23 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Gallery
}, Symbol.toStringTag, { value: "Module" }));
const Card = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn$1(
      "rounded-lg border border-gray-200 bg-white text-gray-950 shadow-sm dark:border-gray-800 dark:bg-gray-950 dark:text-gray-50",
      className
    ),
    ...props
  }
));
Card.displayName = "Card";
const CardHeader = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn$1("flex flex-col space-y-1.5 p-6", className),
    ...props
  }
));
CardHeader.displayName = "CardHeader";
const CardTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "h3",
  {
    ref,
    className: cn$1("text-2xl font-semibold leading-none tracking-tight", className),
    ...props
  }
));
CardTitle.displayName = "CardTitle";
const CardDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "p",
  {
    ref,
    className: cn$1("text-sm text-gray-500 dark:text-gray-400", className),
    ...props
  }
));
CardDescription.displayName = "CardDescription";
const CardContent = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx("div", { ref, className: cn$1("p-6 pt-0", className), ...props }));
CardContent.displayName = "CardContent";
const CardFooter = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn$1("flex items-center p-6 pt-0", className),
    ...props
  }
));
CardFooter.displayName = "CardFooter";
const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-gray-950 dark:focus-visible:ring-gray-300",
  {
    variants: {
      variant: {
        default: "bg-gray-900 text-gray-50 hover:bg-gray-900/90 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90",
        destructive: "bg-red-500 text-gray-50 hover:bg-red-500/90 dark:bg-red-900 dark:text-gray-50 dark:hover:bg-red-900/90",
        outline: "border border-gray-200 bg-white hover:bg-gray-100 hover:text-gray-900 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50",
        secondary: "bg-gray-100 text-gray-900 hover:bg-gray-100/80 dark:bg-gray-800 dark:text-gray-50 dark:hover:bg-gray-800/80",
        ghost: "hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-gray-50",
        link: "text-gray-900 underline-offset-4 hover:underline dark:text-gray-50"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";
  return /* @__PURE__ */ jsx(
    Comp,
    {
      className: cn$1(buttonVariants({ variant, size, className })),
      ref,
      ...props
    }
  );
});
Button.displayName = "Button";
const CarouselContext = React.createContext(null);
function useCarousel() {
  const context = React.useContext(CarouselContext);
  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }
  return context;
}
const Carousel = React.forwardRef(
  ({
    orientation = "horizontal",
    opts,
    setApi,
    plugins,
    className,
    children,
    ...props
  }, ref) => {
    const [carouselRef, api] = useEmblaCarousel(
      {
        ...opts,
        axis: orientation === "horizontal" ? "x" : "y"
      },
      plugins
    );
    const [canScrollPrev, setCanScrollPrev] = React.useState(false);
    const [canScrollNext, setCanScrollNext] = React.useState(false);
    const onSelect = React.useCallback((api2) => {
      if (!api2) {
        return;
      }
      setCanScrollPrev(api2.canScrollPrev());
      setCanScrollNext(api2.canScrollNext());
    }, []);
    const scrollPrev = React.useCallback(() => {
      api == null ? void 0 : api.scrollPrev();
    }, [api]);
    const scrollNext = React.useCallback(() => {
      api == null ? void 0 : api.scrollNext();
    }, [api]);
    const handleKeyDown = React.useCallback(
      (event) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          scrollPrev();
        } else if (event.key === "ArrowRight") {
          event.preventDefault();
          scrollNext();
        }
      },
      [scrollPrev, scrollNext]
    );
    React.useEffect(() => {
      if (!api || !setApi) {
        return;
      }
      setApi(api);
    }, [api, setApi]);
    React.useEffect(() => {
      if (!api) {
        return;
      }
      onSelect(api);
      api.on("reInit", onSelect);
      api.on("select", onSelect);
      return () => {
        api == null ? void 0 : api.off("select", onSelect);
      };
    }, [api, onSelect]);
    return /* @__PURE__ */ jsx(
      CarouselContext.Provider,
      {
        value: {
          carouselRef,
          api,
          opts,
          orientation: orientation || ((opts == null ? void 0 : opts.axis) === "y" ? "vertical" : "horizontal"),
          scrollPrev,
          scrollNext,
          canScrollPrev,
          canScrollNext
        },
        children: /* @__PURE__ */ jsx(
          "div",
          {
            ref,
            onKeyDownCapture: handleKeyDown,
            className: cn$1("relative", className),
            role: "region",
            "aria-roledescription": "carousel",
            ...props,
            children
          }
        )
      }
    );
  }
);
Carousel.displayName = "Carousel";
const CarouselContent = React.forwardRef(({ className, ...props }, ref) => {
  const { carouselRef, orientation } = useCarousel();
  return /* @__PURE__ */ jsx("div", { ref: carouselRef, className: "overflow-hidden", children: /* @__PURE__ */ jsx(
    "div",
    {
      ref,
      className: cn$1(
        "flex",
        orientation === "horizontal" ? "-ml-4 flex items-center" : "-mt-4 flex-col",
        className
      ),
      ...props
    }
  ) });
});
CarouselContent.displayName = "CarouselContent";
const CarouselItem = React.forwardRef(({ className, ...props }, ref) => {
  const { orientation } = useCarousel();
  return /* @__PURE__ */ jsx(
    "div",
    {
      ref,
      role: "group",
      "aria-roledescription": "slide",
      className: cn$1(
        "min-w-0 shrink-0 grow-0 basis-full",
        orientation === "horizontal" ? "pl-4" : "pt-4",
        className
      ),
      ...props
    }
  );
});
CarouselItem.displayName = "CarouselItem";
const CarouselPrevious = React.forwardRef(
  ({ className, variant = "outline", size = "icon", ...props }, ref) => {
    const { orientation, scrollPrev, canScrollPrev } = useCarousel();
    return /* @__PURE__ */ jsxs(
      Button,
      {
        ref,
        variant,
        size,
        className: cn$1(
          "absolute h-8 w-8 rounded-full",
          orientation === "horizontal" ? "-left-12 top-1/2 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
          className
        ),
        disabled: !canScrollPrev,
        onClick: scrollPrev,
        ...props,
        children: [
          /* @__PURE__ */ jsx(ArrowLeft, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Previous slide" })
        ]
      }
    );
  }
);
CarouselPrevious.displayName = "CarouselPrevious";
const CarouselNext = React.forwardRef(
  ({ className, variant = "outline", size = "icon", ...props }, ref) => {
    const { orientation, scrollNext, canScrollNext } = useCarousel();
    return /* @__PURE__ */ jsxs(
      Button,
      {
        ref,
        variant,
        size,
        className: cn$1(
          "absolute h-8 w-8 rounded-full",
          orientation === "horizontal" ? "-right-12 top-1/2 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
          className
        ),
        disabled: !canScrollNext,
        onClick: scrollNext,
        ...props,
        children: [
          /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Next slide" })
        ]
      }
    );
  }
);
CarouselNext.displayName = "CarouselNext";
function CardCarousel({ events }) {
  const [isVisible, setIsVisible] = useState(window.innerWidth >= 768);
  useEffect(() => {
    const handleResize = () => {
      setIsVisible(window.innerWidth >= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return /* @__PURE__ */ jsxs(
    Carousel,
    {
      opts: {
        align: "start"
      },
      className: "w-full max-w-7xl",
      children: [
        /* @__PURE__ */ jsx(CarouselContent, { children: events.map((event, index) => /* @__PURE__ */ jsx(
          CarouselItem,
          {
            className: "md:basis-1/2 lg:basis-1/3",
            children: /* @__PURE__ */ jsx("div", { className: "p-1", children: /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsx(
              Link,
              {
                href: route(
                  "public.event.show",
                  event.slug
                ),
                children: /* @__PURE__ */ jsxs(CardContent, { className: "card flex aspect-square items-center justify-center p-6", children: [
                  /* @__PURE__ */ jsx("img", { src: event.image_url, alt: "" }),
                  /* @__PURE__ */ jsxs("div", { className: "card-content p-5 text-white", children: [
                    /* @__PURE__ */ jsx("h2", { className: "mb-2 text-lg font-bold uppercase tracking-tight text-white dark:text-white", children: event.title }),
                    /* @__PURE__ */ jsx(
                      "div",
                      {
                        className: "mb-3 font-normal text-white dark:text-gray-400",
                        dangerouslySetInnerHTML: {
                          __html: DOMPurify.sanitize(
                            event.description.substring(
                              0,
                              400
                            )
                          )
                        }
                      }
                    )
                  ] })
                ] })
              }
            ) }) })
          },
          index
        )) }),
        isVisible && /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(CarouselPrevious, { className: "dark:text-white" }),
          /* @__PURE__ */ jsx(CarouselNext, { className: "dark:text-white" })
        ] })
      ]
    }
  );
}
function Ghost({ source, alternative, title, href }) {
  return /* @__PURE__ */ jsxs(
    Link,
    {
      href,
      className: "flex flex-col items-center transition-all hover:scale-105",
      children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: source,
            alt: alternative,
            className: "size-28 drop-shadow-[0_5px_5px_rgba(0,0,0,0.4)]"
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "-mt-[50px] flex h-32 w-48 items-end justify-center rounded-bl-[50px] rounded-tr-[50px] bg-white p-5 shadow-md dark:bg-slate-400", children: /* @__PURE__ */ jsx("h2", { className: "text-center text-xl text-black dark:text-white", children: title }) })
      ]
    }
  );
}
function SplashScreen() {
  return /* @__PURE__ */ jsx("div", { className: "flex h-screen w-full items-center justify-center", children: /* @__PURE__ */ jsx(
    motion.img,
    {
      initial: "hidden",
      animate: "visible",
      variants,
      className: "inline-block w-full object-contain",
      src: "/images/splash.gif",
      alt: "Splash Screen"
    }
  ) });
}
function NumberTicker({
  value,
  direction = "up",
  delay = 0,
  className
}) {
  const ref = useRef(null);
  const motionValue = useMotionValue(direction === "down" ? value : 0);
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100
  });
  const isInView = useInView(ref, { once: true, margin: "0px" });
  useEffect(() => {
    isInView && setTimeout(() => {
      motionValue.set(direction === "down" ? 0 : value);
    }, delay * 1e3);
  }, [motionValue, isInView, delay, value, direction]);
  useEffect(
    () => springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Intl.NumberFormat("it-IT").format(
          latest.toFixed(0)
        );
      }
    }),
    [springValue]
  );
  return /* @__PURE__ */ jsx(
    "span",
    {
      className: cn$1(
        "inline-block tabular-nums tracking-wider text-black dark:text-white",
        className
      ),
      ref
    }
  );
}
function TimelineComponent() {
  return /* @__PURE__ */ jsxs(Timeline, { children: [
    /* @__PURE__ */ jsxs(Timeline.Item, { children: [
      /* @__PURE__ */ jsx(Timeline.Point, { icon: HiCalendar }),
      /* @__PURE__ */ jsxs(Timeline.Content, { children: [
        /* @__PURE__ */ jsx(Timeline.Title, { children: "LABORATORI SCOLASTICI" }),
        /* @__PURE__ */ jsxs(Timeline.Body, { children: [
          "Attività creative, di apprendimento e di socializzazione con gruppi di bambini di Asilo Nido, Scuole d’Infanzia, Scuola Primaria, ragazzi di Scuola Secondaria di Primo e Secondo Grado, svolti al Chiostro di Voltorre o itineranti presso le sedi dei committenti.",
          /* @__PURE__ */ jsx(
            NumberTicker,
            {
              value: "454",
              className: "ml-10 text-3xl font-bold text-black"
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs(Timeline.Item, { children: [
      /* @__PURE__ */ jsx(Timeline.Point, { icon: HiCalendar }),
      /* @__PURE__ */ jsxs(Timeline.Content, { children: [
        /* @__PURE__ */ jsx(Timeline.Title, { children: "CORSI DI FORMAZIONE" }),
        /* @__PURE__ */ jsxs(Timeline.Body, { children: [
          "Percorsi sulla promozione della creatività con materiali non strutturati, interventi sull’organizzazione di attività e contesti di apprendimento per Asili e Scuole, sia Pubbliche che Paritarie e Private",
          /* @__PURE__ */ jsx(
            NumberTicker,
            {
              value: "58",
              className: "ml-10 text-3xl font-bold text-black"
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs(Timeline.Item, { children: [
      /* @__PURE__ */ jsx(Timeline.Point, { icon: HiCalendar }),
      /* @__PURE__ */ jsxs(Timeline.Content, { children: [
        /* @__PURE__ */ jsx(Timeline.Title, { children: "MATERIALE NON STRUTTURATO RECUPERATO DA AZIENDE E ARTIGIANI" }),
        /* @__PURE__ */ jsxs(Timeline.Body, { children: [
          "Legni, corde, plastiche di vario genere, cartoni, carta, metalli, stoffe, spugne, feltro, magneti, sughero, pizzi, valorizzato in Quintali",
          /* @__PURE__ */ jsx(
            NumberTicker,
            {
              value: "45",
              className: "ml-10 text-3xl font-bold text-black"
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs(Timeline.Item, { children: [
      /* @__PURE__ */ jsx(Timeline.Point, { icon: HiCalendar }),
      /* @__PURE__ */ jsxs(Timeline.Content, { children: [
        /* @__PURE__ */ jsx(Timeline.Title, { children: "AZIENDE" }),
        /* @__PURE__ */ jsxs(Timeline.Body, { children: [
          "Realtà grandi e piccole, multinazionali e singoli artigiani della nostra zona che devolvono gratuitamente i loro scarti, le loro rimanenze di magazzino, i loro sottoprodotti a Remida Varese",
          /* @__PURE__ */ jsx(
            NumberTicker,
            {
              value: "35",
              className: "ml-10 text-3xl font-bold text-black"
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs(Timeline.Item, { children: [
      /* @__PURE__ */ jsx(Timeline.Point, { icon: HiCalendar }),
      /* @__PURE__ */ jsxs(Timeline.Content, { children: [
        /* @__PURE__ */ jsx(Timeline.Title, { children: "PARTECIPANTI ATTIVI" }),
        /* @__PURE__ */ jsxs(Timeline.Body, { children: [
          "Bambini, adulti, anziani, famiglie intere che hanno frequentato la nostra sede o hanno partecipato alle nostre attività itineranti in piazze, parchi e altri luoghi comunitari nel 2023",
          /* @__PURE__ */ jsx(
            NumberTicker,
            {
              value: "3650",
              className: "ml-10 text-3xl font-bold text-black"
            }
          )
        ] })
      ] })
    ] })
  ] });
}
function CollaborationCarousel({ array }) {
  const [isVisible, setIsVisible] = useState(window.innerWidth >= 768);
  useEffect(() => {
    const handleResize = () => {
      setIsVisible(window.innerWidth >= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return /* @__PURE__ */ jsxs(
    Carousel,
    {
      opts: {
        align: "start",
        loop: true
      },
      className: "w-full max-w-7xl",
      children: [
        /* @__PURE__ */ jsx(CarouselContent, { children: COLLABORATION_ARRAY.map((el, index) => /* @__PURE__ */ jsx(
          CarouselItem,
          {
            className: "md:basis-1/2 lg:basis-1/3",
            children: /* @__PURE__ */ jsx("div", { className: "p-1", children: /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsx(CardContent, { className: "flex h-fit items-center justify-center p-6", children: /* @__PURE__ */ jsxs("div", { className: "p-5", children: [
              /* @__PURE__ */ jsx("h2", { className: "mb-2 text-2xl font-bold uppercase tracking-tight", children: el.title }),
              /* @__PURE__ */ jsx("div", { className: "mb-3 text-xl font-normal dark:text-gray-400", children: /* @__PURE__ */ jsx("p", { children: el.description }) })
            ] }) }) }) })
          },
          index
        )) }),
        isVisible && /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(CarouselPrevious, { className: "dark:text-white" }),
          /* @__PURE__ */ jsx(CarouselNext, { className: "dark:text-white" })
        ] })
      ]
    }
  );
}
function Home({ events }) {
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    const hasVisited = sessionStorage.getItem("hasVisited");
    if (!hasVisited) {
      setTimeout(() => {
        setLoader(false);
        sessionStorage.setItem("hasVisited", true);
      }, 2500);
    } else {
      setLoader(false);
    }
  }, []);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Head, { children: [
      /* @__PURE__ */ jsx("title", { children: "REMIDA VARESE - Innoviamo con creatività | Home " }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "description",
          content: "Centro di ricerca creativa che promuove il riutilizzo di materiali non strutturati di origine aziendale artigianale e naturale con finalità educative, ambientali ed artistiche."
        }
      ),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "https://remidavarese.it/" })
    ] }),
    loader ? /* @__PURE__ */ jsx(SplashScreen, {}) : /* @__PURE__ */ jsxs(PublicLayout, { children: [
      /* @__PURE__ */ jsxs("section", { className: "grid min-h-screen grid-cols-1 bg-[#1a759f]/40 p-5 md:mt-[100px] md:grid-cols-2 md:p-0 lg:mt-0", children: [
        /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: "hidden",
            animate: "visible",
            variants,
            className: "hidden md:flex md:items-center md:justify-center",
            children: /* @__PURE__ */ jsx(
              "img",
              {
                src: "/images/bg.webp",
                alt: "",
                className: "drop-shadow-[0_5px_5px_rgba(0,0,0,0.4)]"
              }
            )
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center text-white", children: [
          /* @__PURE__ */ jsxs(
            motion.h1,
            {
              initial: "hidden",
              animate: "visible",
              variants,
              className: "w-9/12 text-3xl md:text-6xl",
              children: [
                /* @__PURE__ */ jsx("span", { className: "font-bold", children: "REMIDA VARESE" }),
                /* @__PURE__ */ jsx("br", {}),
                /* @__PURE__ */ jsxs("span", { className: "mt-2 text-xl md:text-2xl", children: [
                  "Centro di ricerca creativa che promuove il riutilizzo di materiali non strutturati di origine aziendale artigianale e naturale con finalità educative, ambientali ed artistiche. ",
                  /* @__PURE__ */ jsx("br", {}),
                  " Remida Varese attinge al metodo pedagogico ”",
                  /* @__PURE__ */ jsx(
                    "a",
                    {
                      href: "https://www.reggiochildren.it/reggio-emilia-approach/",
                      target: "_blank",
                      rel: "noreferrer",
                      className: "text-white underline",
                      children: "Reggio Emilia Approach"
                    }
                  ),
                  "”."
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsx(Link, { href: route("about"), children: /* @__PURE__ */ jsx("button", { className: "mt-10 w-full rounded-3xl bg-white px-6 py-2 text-lg font-semibold text-black shadow-lg transition-colors hover:bg-gray-200 dark:bg-gray-600 dark:text-white dark:hover:bg-gray-700", children: "Scopri di più" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "grid min-h-[65vh] grid-cols-1 place-items-center gap-5 bg-slate-300 p-5 pb-10 md:grid-cols-3 dark:bg-slate-600", children: [
        /* @__PURE__ */ jsx(
          Ghost,
          {
            source: "/images/Nero.png",
            alternative: "Fantasma Nero",
            title: "Laboratori per Scuole",
            href: route("laboratories")
          }
        ),
        /* @__PURE__ */ jsx(
          Ghost,
          {
            source: "/images/Grigio.png",
            alternative: "Fantasma Grigio",
            title: "Formazione",
            href: route("training")
          }
        ),
        /* @__PURE__ */ jsx(
          Ghost,
          {
            source: "/images/Blu.png",
            alternative: "Fantasma Blu",
            title: "Emporio dei Materiali",
            href: route("emporium")
          }
        ),
        /* @__PURE__ */ jsx(
          Ghost,
          {
            source: "/images/Verde.png",
            alternative: "Fantasma Verde",
            title: "Laboratori per Altri Enti",
            href: route("other")
          }
        ),
        /* @__PURE__ */ jsx(
          Ghost,
          {
            source: "/images/Viola.png",
            alternative: "Fantasma Viola",
            title: "Aziende",
            href: route("agency")
          }
        ),
        /* @__PURE__ */ jsx(
          Ghost,
          {
            source: "/images/Arancio.png",
            alternative: "Fantasma Arancio",
            title: "Laboratori Speciali",
            href: route("special")
          }
        )
      ] }),
      /* @__PURE__ */ jsx(
        motion.section,
        {
          initial: "hidden",
          whileInView: "visible",
          viewport: { once: true },
          variants,
          className: "where grid h-screen place-items-center text-white",
          children: /* @__PURE__ */ jsxs("div", { className: "max-w-xl p-5 text-center md:p-0", children: [
            /* @__PURE__ */ jsx(
              motion.h2,
              {
                initial: "hidden",
                whileInView: "visible",
                viewport: { once: true },
                variants,
                className: "mb-10 pb-5 text-center text-6xl",
                children: "Dove Siamo"
              }
            ),
            /* @__PURE__ */ jsxs(
              motion.p,
              {
                initial: "hidden",
                whileInView: "visible",
                viewport: { once: true },
                variants,
                className: "text-4xl",
                children: [
                  "Il",
                  " ",
                  /* @__PURE__ */ jsx(
                    "a",
                    {
                      href: "https://it.wikipedia.org/wiki/Chiostro_di_Voltorre",
                      target: "_blank",
                      rel: "noreferrer",
                      className: "text-white underline",
                      children: "Chiostro di Voltorre"
                    }
                  ),
                  " ",
                  "è un monastero benedettino del XII secolo in stile romanico.",
                  /* @__PURE__ */ jsx("br", {}),
                  "Ospita nei suoi locali i contesti ludici di apprendimento di ReMida Varese"
                ]
              }
            ),
            /* @__PURE__ */ jsx(
              motion.div,
              {
                initial: "hidden",
                whileInView: "visible",
                viewport: { once: true },
                variants,
                className: "px-5",
                children: /* @__PURE__ */ jsx(Link, { href: route("contacts"), children: /* @__PURE__ */ jsx(
                  ShimmerButton,
                  {
                    className: "mt-3 w-full bg-red-600 text-lg hover:bg-red-800 dark:font-bold",
                    shimmerSize: "0.2rem",
                    background: "rgba(185, 28, 28 , 1)",
                    children: "Contattaci"
                  }
                ) })
              }
            )
          ] })
        }
      ),
      /* @__PURE__ */ jsxs(
        motion.section,
        {
          initial: "hidden",
          whileInView: "visible",
          viewport: { once: true },
          variants,
          className: "flex flex-col items-center justify-center bg-transparent p-5 py-10 dark:bg-slate-600",
          children: [
            /* @__PURE__ */ jsx("h2", { className: "mb-10 text-6xl text-black dark:text-gray-200", children: "In Evidenza" }),
            events.length == 0 && /* @__PURE__ */ jsx("div", { className: "", children: /* @__PURE__ */ jsx("p", { className: "min-h-[25vh] text-2xl dark:text-white", children: "Non Sono Ancora Presenti Eventi" }) }),
            /* @__PURE__ */ jsx(CardCarousel, { events })
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        motion.section,
        {
          initial: "hidden",
          whileInView: "visible",
          viewport: { once: true },
          variants,
          className: "grid min-h-fit grid-cols-1 bg-slate-400 md:grid-cols-2",
          children: [
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center bg-slate-500 p-10", children: [
              /* @__PURE__ */ jsx("h2", { className: "mb-10 text-center text-6xl text-white", children: "Aperture" }),
              /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 justify-items-center p-2 md:p-10", children: /* @__PURE__ */ jsxs("p", { className: "text-2xl text-white md:text-4xl", children: [
                "Remida Varese apre solo su prenotazione per i",
                " ",
                /* @__PURE__ */ jsx(
                  Link,
                  {
                    href: route("laboratories"),
                    className: "text-white underline",
                    children: "Laboratori per scuole"
                  }
                ),
                " ",
                "e per il prelievo di materiale non strutturato dall’Emporio dei Materiali. I Laboratori creativi per famiglie aprono con calendario stagionale (vedere le",
                " ",
                /* @__PURE__ */ jsx(
                  Link,
                  {
                    href: route("events"),
                    className: "text-white underline",
                    children: "notizie in Evidenza"
                  }
                ),
                "). Tutte le attività sono riservate agli Associati di Altrementi aps."
              ] }) })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center p-5 md:p-10", children: [
              /* @__PURE__ */ jsx("h2", { className: "mb-10 text-center text-6xl text-white", children: "I Nostri Partner" }),
              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 place-items-center justify-items-center gap-5 p-10 md:grid-cols-2", children: [
                /* @__PURE__ */ jsx("img", { src: "/images/provincia.jpg", alt: "" }),
                /* @__PURE__ */ jsx("img", { src: "/images/gavirate.jpg", alt: "" })
              ] })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        motion.section,
        {
          initial: "hidden",
          whileInView: "visible",
          viewport: { once: true },
          variants,
          className: "flex min-h-fit flex-col items-center justify-center p-2 md:p-10 dark:bg-slate-600",
          children: [
            /* @__PURE__ */ jsx("h2", { className: "mb-10 text-center text-6xl text-black dark:text-white", children: "Quanto Abbiamo Fatto" }),
            /* @__PURE__ */ jsx("div", { className: "max-w-6xl p-5", children: /* @__PURE__ */ jsx(TimelineComponent, {}) })
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        motion.section,
        {
          initial: "hidden",
          whileInView: "visible",
          viewport: { once: true },
          variants,
          className: "flex min-h-fit flex-col items-center justify-center bg-slate-600 p-2 md:p-10",
          children: [
            /* @__PURE__ */ jsx("h2", { className: "mb-10 text-center text-6xl text-white", children: "Collaborazioni" }),
            /* @__PURE__ */ jsx(CollaborationCarousel, {})
          ]
        }
      )
    ] })
  ] });
}
const __vite_glob_0_24 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Home
}, Symbol.toStringTag, { value: "Module" }));
function Laboratories() {
  const { flash } = usePage().props;
  const {
    data,
    setData,
    post,
    processing,
    errors,
    wasSuccessful,
    clearErrors,
    reset
  } = useForm({
    name: "",
    email: "",
    phone: "",
    school: "",
    message: "",
    privacy: false
  });
  const submit = (e) => {
    e.preventDefault();
    post(route("contact.schools"), {
      preserveScroll: true,
      preserveState: true,
      onSuccess: () => {
        reset("name", "email", "phone", "school", "message", "privacy");
        clearErrors();
      }
    });
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Head, { children: [
      /* @__PURE__ */ jsx("title", { children: "REMIDA VARESE - Innoviamo con creatività | Laboratori per Scuole" }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "description",
          content: "I laboratori proposti si basano su approcci\n                                pedagogici che permettono di fare scoperte, di\n                                provare e sperimentare, di conoscere, di\n                                sbagliare e di apprendere."
        }
      ),
      /* @__PURE__ */ jsx(
        "link",
        {
          rel: "canonical",
          href: "https://remidavarese.it/laboratori-per-scuole"
        }
      )
    ] }),
    /* @__PURE__ */ jsxs(PublicLayout, { children: [
      /* @__PURE__ */ jsxs("section", { className: "mt-[110px] grid h-screen grid-cols-1 bg-black/60 p-5 md:grid-cols-3 md:p-0 lg:mt-0", children: [
        /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center text-white", children: /* @__PURE__ */ jsxs(
          motion.h1,
          {
            initial: "hidden",
            animate: "visible",
            variants,
            className: "w-9/12 py-5 text-3xl md:text-6xl",
            children: [
              /* @__PURE__ */ jsx("span", { className: "font-bold", children: "Laboratori per Scuole" }),
              /* @__PURE__ */ jsx("p", { className: "mt-5 text-xl md:text-2xl", children: "I laboratori proposti si basano su approcci pedagogici che permettono di fare scoperte, di provare e sperimentare, di conoscere, di sbagliare e di apprendere." })
            ]
          }
        ) }),
        /* @__PURE__ */ jsx("div", { className: "col-span-2", children: /* @__PURE__ */ jsx(
          "img",
          {
            className: "h-screen w-full object-cover opacity-90",
            src: "/images/laboratories.webp",
            alt: ""
          }
        ) })
      ] }),
      /* @__PURE__ */ jsx(
        motion.section,
        {
          initial: "hidden",
          whileInView: "visible",
          viewport: { once: true },
          variants,
          className: "bg-transparent dark:bg-slate-500 dark:text-white",
          children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-5 py-10 text-2xl", children: [
            /* @__PURE__ */ jsx("p", { children: "Le idee e la loro realizzazione nascono spontanee nei nostri laboratori, che prevedono la manipolazione attiva dei materiali non strutturati messi a disposizione in contesti appropriati, dove divengono mediatori di apprendimento e strumenti d’indagine per il singolo e per il gruppo che interagisce." }),
            /* @__PURE__ */ jsxs("p", { className: "mt-5", children: [
              /* @__PURE__ */ jsx("strong", { children: "Le proposte" }),
              " tengono in considerazione le conoscenze e le abilità dei partecipanti, le esigenze di gioco e le tematiche,",
              " ",
              /* @__PURE__ */ jsx("strong", { children: "differenziate per fasce d’età" }),
              " e congruenti con le programmazioni scolastiche."
            ] }),
            /* @__PURE__ */ jsxs("p", { className: "mt-5", children: [
              "Remida Varese offre laboratori",
              " ",
              /* @__PURE__ */ jsx("strong", { children: "permanenti presso il Chiostro di Voltorre" }),
              " ",
              "o ",
              /* @__PURE__ */ jsx("strong", { children: "itineranti presso la vostra sede" }),
              ", con la possibilità di programmare più incontri in modo da avere più tempo nell’esplorazione delle potenzialità dei materiali non strutturati."
            ] }),
            /* @__PURE__ */ jsx("p", { className: "mt-5", children: "IMPORTANTE: per quanto riguarda le attività permanenti presso il Chiostro di Voltorre, diamo la possibilità di consumare un pranzo al sacco in autonomia al termine dei laboratori, nei pressi del Chiostro se bel tempo o in spazi coperti in caso di maltempo." }),
            /* @__PURE__ */ jsx("p", { className: "mt-5", children: "Di seguito le proposte educativo/didattiche per l'anno scolastico 2024-2025:" })
          ] })
        }
      ),
      /* @__PURE__ */ jsxs(
        motion.section,
        {
          initial: "hidden",
          whileInView: "visible",
          viewport: { once: true },
          variants,
          className: "grid grid-cols-1 bg-transparent md:grid-cols-2 dark:bg-slate-600",
          children: [
            /* @__PURE__ */ jsxs("div", { className: "rounded-lg border-2 border-red-200 bg-slate-600 p-10 text-2xl text-white", children: [
              /* @__PURE__ */ jsx("h2", { className: "mb-10 text-center text-6xl", children: "Asilo Nido e Sezione Primavera" }),
              /* @__PURE__ */ jsx("p", { children: "Il bambino da 1 a 3 anni si interessa spontaneamente all’ambiente che lo circonda, scopre e conosce attraverso i sensi e tutto il suo corpo: come un esploratore si muove alla ricerca di ciò che è nuovo, che attira la sua attenzione e, grazie alla ripetizione instancabile, conosce e diventa abile. Sperimentare, scoprire e ripetere sono le azioni attraverso cui il bambino affina le proprie abilità cognitive, manuali, emotive." }),
              /* @__PURE__ */ jsx("p", { className: "mt-5", children: "Il materiale non strutturato, per le sue caratteristiche, offre infinite possibilità al bambino di questa età: concetti come pieno e vuoto, dentro e fuori, alto e basso, luce e ombra, l’equilibrio e la caduta (ecc.) sono conosciuti e acquisiti da esperienze dirette che egli fa con le mani e con il corpo, per la sua mente." }),
              /* @__PURE__ */ jsxs("p", { className: "mt-5", children: [
                "È possibile",
                " ",
                /* @__PURE__ */ jsx("strong", { children: "organizzare i seguenti laboratori con la presenza dei genitori, per la festa finale dell’anno scolastico e/o per la promozione del proprio Asilo" }),
                "."
              ] }),
              /* @__PURE__ */ jsx("h2", { className: "my-10 text-3xl font-semibold", children: "LABORATORI PERMANENTI PRESSO IL CHIOSTRO DI VOLTORRE" }),
              /* @__PURE__ */ jsx("p", { className: "mt-5", children: "Remida Varese ha allestito presso la sua sede dei contesti ludici, pronti ad accogliere fino a 25 bambini per ognuna delle seguenti attività:" }),
              /* @__PURE__ */ jsxs("p", { className: "mt-5", children: [
                /* @__PURE__ */ jsx("strong", { children: "TAPPETO DI TESORI" }),
                " – ESPLORAZIONE SENSORIALE POLIMATERICA – 12/18 mesi"
              ] }),
              /* @__PURE__ */ jsx("p", { className: "mt-5", children: "Luogo di scoperte e ricerche sensoriali dove i bimbi entrano in relazione con i diversi materiali per toccarli, allinearli, impilarli, scuoterli, infilarli l’uno dentro l’altro. Il tatto, la vista, l’udito indagano e scoprono le potenzialità infinite dei materiali presenti, in un’armonia che genera nuove combinazioni e possibilità costruttive." }),
              /* @__PURE__ */ jsxs("p", { className: "mt-5", children: [
                /* @__PURE__ */ jsx("strong", { children: "CHE COMBINAZIONE!" }),
                " – GIOCO EURISTICO – 12/24 mesi"
              ] }),
              /* @__PURE__ */ jsx("p", { className: "mt-5", children: "“Cosa posso fare con questo oggetto? Come funziona? “" }),
              /* @__PURE__ */ jsx("p", { className: "mt-5", children: "Il laboratorio euristico è uno spazio dedicato di libera sperimentazione e scoperta, di materiali non consueti: il materiale non strutturato è classificato per categorie di oggetti, selezionati accuratamente in quantità e qualità per offrire al bambino la possibilità di raggiungere nuove mete e scoperte autonome (Eureka!)." }),
              /* @__PURE__ */ jsx("p", { className: "mt-5", children: "Una proposta educativa che offre agli educatori la possibilità di trovare un nuovo sguardo sui bambini, al loro desiderio di sperimentazione e scoperta, per comprendere e conoscere il bambino in tutta la sua totalità: emotiva, corporea, cognitiva." }),
              /* @__PURE__ */ jsxs("p", { className: "mt-5", children: [
                /* @__PURE__ */ jsx("strong", { children: "EQUILIBRI" }),
                " – MOVIMENTO E SCOPERTA – 12/24 mesi"
              ] }),
              /* @__PURE__ */ jsx("p", { className: "mt-5", children: "Questo contesto con gioco a terra permette di coniugare il desiderio di fare grandi spostamenti, sperimentare e ricercare l’equilibrio degli oggetti e del loro corpo. Esperienze di gioco in movimento come: impilare, costruire torri e farle cadere, allineare, costruire camminamenti per provare equilibri con il corpo, trasportare e sperimentare il peso, la leggerezza, la stabilità." }),
              /* @__PURE__ */ jsxs("p", { className: "mt-5", children: [
                /* @__PURE__ */ jsx("strong", { children: "CANTIERE" }),
                " – MACRO COSTRUTTIVITÁ – 12/24 mesi, Sezione Primavera"
              ] }),
              /* @__PURE__ */ jsx("p", { className: "mt-5", children: "Il materiale non strutturato induce esplorazioni di equilibri, piani inclinati, incastri per la costruzione di architetture fantastiche per forma, dimensione, colore. Si sviluppa un processo in continua trasformazione dove abilità fisiche e matematiche si mettono alla prova, favorendo la collaborazione e la cooperazione tra i partecipanti." }),
              /* @__PURE__ */ jsx("h2", { className: "my-10 text-3xl font-semibold", children: "LABORATORI ITINERANTI PRESSO LA SEDE DELLE SCUOLE" }),
              /* @__PURE__ */ jsxs("p", { className: "mt-5", children: [
                "Gli stessi laboratori si possono realizzare nelle vostre sedi, in spazi idonei. Una sola attività o una serie di esperienze evitando la trasferta verso il Chiostro di Voltorre,",
                " ",
                /* @__PURE__ */ jsx("strong", { children: "con o senza genitori" }),
                "."
              ] }),
              /* @__PURE__ */ jsx("p", { className: "mt-5", children: /* @__PURE__ */ jsx("strong", { children: "Compilate il form sottostante per ricevere una proposta ad hoc." }) })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "rounded-lg border-2 border-red-200 bg-slate-300 p-10 text-2xl text-black dark:bg-slate-400", children: [
              /* @__PURE__ */ jsx("h2", { className: "mb-10 text-center text-6xl", children: "Scuola dell'infanzia" }),
              /* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsx("strong", { children: "“non sono sicuro di aver vissuto, dopo l’infanzia” A. de Saint-Exupéry" }) }),
              /* @__PURE__ */ jsx("p", { className: "mt-5", children: "I laboratori pensati per l’infanzia facilitano attività espressive come quelle di simbolizzazione e narrazione, suggeriscono domande e fanno nascere suggestioni." }),
              /* @__PURE__ */ jsx("p", { className: "mt-5", children: "Fruizione di stimoli e informazioni provenienti dai materiali, dallo spazio e dalle loro interazioni, rielaborazione e produzione creativa sono le attività che prendono vita nei laboratori per l’infanzia di Remida Varese, verso l’obiettivo ultimo del potenziamento del pensiero divergente, contraddistinto da flessibilità, fluidità, originalità, elaborazione, valutazione, cambiamento e innovazione." }),
              /* @__PURE__ */ jsx("h2", { className: "my-10 text-3xl font-semibold", children: "LABORATORI PERMANENTI PRESSO IL CHIOSTRO DI VOLTORRE" }),
              /* @__PURE__ */ jsx("p", { className: "mt-5", children: "Remida Varese ha allestito presso la sua sede dei contesti ludici di apprendimento per ognuna delle seguenti attività, che una volta terminate prevedono il riordino dei materiali riutilizzati:" }),
              /* @__PURE__ */ jsxs("p", { className: "mt-5", children: [
                /* @__PURE__ */ jsx("strong", { children: "CANTIERE" }),
                " – MACRO COSTRUTTIVITÁ – primo, secondo e terzo anno"
              ] }),
              /* @__PURE__ */ jsx("p", { className: "mt-5", children: "Il materiale non strutturato induce esplorazioni di equilibri, piani inclinati, incastri per la costruzione di architetture fantastiche per forma, dimensione, colore. Si sviluppa un processo in continua trasformazione dove abilità fisiche e matematiche si mettono alla prova, favorendo la collaborazione e la cooperazione tra i partecipanti." }),
              /* @__PURE__ */ jsxs("p", { className: "mt-5", children: [
                /* @__PURE__ */ jsx("strong", { children: "CORNICI MATERICHE" }),
                " – MICRO CREATIVITÁ – primo, secondo e terzo anno"
              ] }),
              /* @__PURE__ */ jsx("p", { className: "mt-5", children: "Propone un percorso creativo e immaginativo attraverso il riuso di piccoli materiali non strutturati. La varietà per tipologia, forma, colore dei materiali messi a disposizione dei bambini stimola l’espressività insita in ognuno. Si privilegia il processo creativo piuttosto che il prodotto finale, si induce la riflessione su quello che si sta facendo, si manifesta la voglia di condividere il significato dell’opera realizzata." }),
              /* @__PURE__ */ jsxs("p", { className: "mt-5", children: [
                /* @__PURE__ */ jsx("strong", { children: "LUCI E OMBRE" }),
                " – ESPLORAZIONE E CREATIVITÁ – primo, secondo e terzo anno"
              ] }),
              /* @__PURE__ */ jsx("p", { className: "mt-5", children: "In un ambiente oscurato si esplorano le potenzialità dei materiali non strutturati in relazione alla luce, diffusa dal basso o proiettata verso una parete. In un continuo gioco individuale o di gruppo si apprendono mutazioni di tonalità, di grandezza, di combinazione cromatica interagendo con le ombre che si possono creare. La percezione degli oggetti varia permettendo apprendimenti in relazione anche al corpo e al movimento." }),
              /* @__PURE__ */ jsxs("p", { className: "mt-5", children: [
                /* @__PURE__ */ jsx("strong", { children: "GIOCARE CON I SUONI" }),
                " – SONORITÁ E COOPERAZIONE – secondo e terzo anno"
              ] }),
              /* @__PURE__ */ jsx("p", { className: "mt-5", children: "Tutto suona, i corpi, gli ambienti, la natura e i materiali che ci circondano. Il laboratorio propone giochi con cui imparare a riconoscere e riprodurre i diversi suoni e ritmi che scaturiscono dalla percussione, dallo scuotimento, dall’oscillamento degli oggetti messi a disposizione dei partecipanti. Guidati dal musicoterapista Antonio Testa il gruppo di partecipanti diviene una piccola orchestra attraverso l’ascolto degli altri, la concentrazione e la cooperazione." }),
              /* @__PURE__ */ jsx("h2", { className: "my-10 text-3xl font-semibold", children: "LABORATORI ITINERANTI PRESSO LA SEDE DELLE SCUOLE" }),
              /* @__PURE__ */ jsx("p", { className: "mt-5", children: "La stessa tipologia di laboratori può giungere nelle vostre sedi. Un solo laboratorio o una serie di esperienze senza la trasferta verso il Chiostro di Voltorre. Siamo in grado di trasportare materiali e attrezzature in spazi idonei, visionati in precedenza." }),
              /* @__PURE__ */ jsx("p", { className: "mt-5", children: /* @__PURE__ */ jsx("strong", { children: "Compilate il form sottostante per ricevere una proposta ad hoc." }) })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "rounded-lg border-2 border-red-200 bg-slate-300 p-10 text-2xl text-black dark:bg-slate-400", children: [
              /* @__PURE__ */ jsx("h2", { className: "mb-10 text-center text-6xl", children: "Scuola Primaria" }),
              /* @__PURE__ */ jsx("p", { children: "I nostri laboratori sono un luogo di esplorazione e di creatività, sono una pratica del fare, dove lo studente diventa protagonista di un processo di costruzione di conoscenze che gli permettono di essere coinvolto in una situazione collettiva di scambio comunicativo tra pari, di costruzione di apprendimenti significativi." }),
              /* @__PURE__ */ jsx("p", { className: "mt-5", children: "Remida Varese per la scuola primaria adotta un metodo pedagogico rigoroso e mirato a mantenere un atteggiamento al contempo aperto e analitico nei confronti delle cose, di quelle sconosciute, ma soprattutto di quelle conosciute." }),
              /* @__PURE__ */ jsxs("p", { className: "mt-5", children: [
                "Remida Varese offre laboratori",
                " ",
                /* @__PURE__ */ jsx("strong", { children: "permanenti presso il Chiostro di Voltorre a Gavirate" }),
                ", che toccano anche",
                " ",
                /* @__PURE__ */ jsx("strong", { children: "argomenti storici" }),
                " (le origini del Monastero) e ",
                /* @__PURE__ */ jsx("strong", { children: "ambientali " }),
                "(con una eventuale passeggiata in sicurezza sulle sponde del lago di Varese)"
              ] }),
              /* @__PURE__ */ jsx("h2", { className: "my-10 text-3xl font-semibold", children: "LABORATORI PERMANENTI PRESSO IL CHIOSTRO DI VOLTORRE" }),
              /* @__PURE__ */ jsx("p", { className: "mt-5", children: "Remida Varese ha allestito presso la sua sede dei contesti ludici di apprendimento per ognuna delle seguenti attività, che una volta terminate prevedono il riordino dei materiali riutilizzati:" }),
              /* @__PURE__ */ jsxs("p", { className: "mt-5", children: [
                /* @__PURE__ */ jsx("strong", { children: "TERRE DI MEZZO" }),
                " – GIORNATA DI ACCOGLIENZA A INIZIO ANNO SCOLASTICO – primo anno"
              ] }),
              /* @__PURE__ */ jsx("p", { className: "mt-5", children: "Nella fase passaggio dalla Scuola dell’infanzia alla Scuola Primaria, il primo periodo di socializzazione e accoglienza permette di costruire un clima inclusivo e non discriminante. Proponiamo una giornata di attività creative di gruppo che sviluppano la cooperazione divertendosi, naturalmente con materiali non strutturati." }),
              /* @__PURE__ */ jsxs("p", { className: "mt-5", children: [
                /* @__PURE__ */ jsx("strong", { children: "TANGRAM" }),
                " – LOGICA, IMMAGINAZIONE E COOPERAZIONE – primo e secondo anno"
              ] }),
              /* @__PURE__ */ jsx("p", { className: "mt-5", children: "Il Tangram è un gioco-rompicapo antichissimo di origine orientale, costituito da sette tavole il cui scopo è formare una figura utilizzando tutti i pezzi senza sovrapposizioni. Sviluppa l’immaginazione e la fantasia per creare sagome di uomini, animali, case, ecc.." }),
              /* @__PURE__ */ jsx("p", { className: "mt-5", children: "È un importante esercizio di concentrazione e conoscenza delle forme geometriche, della loro visione e composizione nello spazio. Nelle scuole primarie del nord Europa è inserito nella programmazione didattica di geometria e di altre discipline." }),
              /* @__PURE__ */ jsx("p", { className: "mt-5", children: "Remida Varese riutilizza materiali non strutturati sia per costruire i tangram di varie dimensioni, sia per personalizzare le configurazioni realizzate." }),
              /* @__PURE__ */ jsxs("p", { className: "mt-5", children: [
                /* @__PURE__ */ jsx("strong", { children: "CITTÁ INFINITA" }),
                " – MACRO COSTRUTTIVITÁ E COOPERAZIONE – tutto il quinquennio"
              ] }),
              /* @__PURE__ */ jsx("p", { className: "mt-5", children: "Un’esperienza collettiva di creazione e costruzione di spazi urbani sempre nuovi e unici. La città diventa il luogo delle relazioni e del dialogo. Partendo dalla propria casa, ogni partecipante incrementa il valore della cooperazione realizzando insieme ad altri spazi ed edifici condivisi." }),
              /* @__PURE__ */ jsxs("p", { className: "mt-5", children: [
                /* @__PURE__ */ jsx("strong", { children: "ANIMALIAMO" }),
                " – CREATIVITÁ, COOPERAZIONE E NARRAZIONE – tutto il quinquennio"
              ] }),
              /* @__PURE__ */ jsx("p", { className: "mt-5", children: "Partendo dalla visione dell’albo illustrato “Bestiario universale”, gli studenti sono stimolati a progettare e realizzare in coppia un animale fantastico, riutilizzando piccoli materiali da combinare tra loro. Successivamente le superbestie si presentano al resto del gruppo, specificando caratteristiche fisiche ed etologiche uniche e irripetibili!" }),
              /* @__PURE__ */ jsxs("p", { className: "mt-5", children: [
                /* @__PURE__ */ jsx("strong", { children: "LUCI E OMBRE" }),
                " – ESPLORAZIONE E CREATIVITÁ – tutto il quinquennio"
              ] }),
              /* @__PURE__ */ jsx("p", { className: "mt-5", children: "In un ambiente oscurato si esplorano le potenzialità dei materiali non strutturati in relazione alla luce, diffusa dal basso o proiettata verso una parete. In un continuo gioco individuale o di gruppo si apprendono mutazioni di tonalità, di grandezza, di combinazione cromatica interagendo con le ombre che si possono creare. La percezione degli oggetti varia permettendo apprendimenti in relazione anche al corpo e al movimento. Si potranno infine comprendere fenomeni come l’eclissi e l’alternanza delle stagioni" }),
              /* @__PURE__ */ jsxs("p", { className: "mt-5", children: [
                /* @__PURE__ */ jsx("strong", { children: "GIOCARE CON I SUONI" }),
                " – SONORITÁ E COOPERAZIONE – tutto il quinquennio"
              ] }),
              /* @__PURE__ */ jsx("p", { className: "mt-5", children: "I materiali non strutturati nascondono svariate potenzialità sonore. Il laboratorio propone indagini attraverso la relazione tra il corpo, le mani, i gesti e le qualità sonore dei vari materiali, anche in combinazione tra loro: nascono così suoni e ritmi che scaturiscono dalla percussione, dallo scuotimento, dall’oscillamento degli oggetti messi a disposizione dei partecipanti. Guidati dal musicoterapista Antonio Testa il gruppo di partecipanti diviene una piccola orchestra attraverso l’ascolto degli altri, la concentrazione e la cooperazione." }),
              /* @__PURE__ */ jsx("h2", { className: "my-10 text-3xl font-semibold", children: "LABORATORI ITINERANTI PRESSO LA SEDE DELLE SCUOLE" }),
              /* @__PURE__ */ jsxs("p", { className: "mt-5", children: [
                "Gli stessi laboratori si possono realizzare nelle vostre sedi, in spazi idonei. Una sola attività o una serie di esperienze evitando la trasferta verso il Chiostro di Voltorre,",
                " ",
                /* @__PURE__ */ jsx("strong", { children: "con o senza genitori" }),
                "."
              ] }),
              /* @__PURE__ */ jsx("p", { className: "mt-5", children: /* @__PURE__ */ jsx("strong", { children: "Compilate il form sottostante per ricevere una proposta ad hoc." }) })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "rounded-lg border-2 border-red-200 bg-slate-600 p-10 text-2xl text-white", children: [
              /* @__PURE__ */ jsx("h2", { className: "mb-10 text-center text-6xl", children: "Scuola Secondaria" }),
              /* @__PURE__ */ jsxs("p", { className: "text-2xl", children: [
                "Per le scuole secondarie privilegiamo: un",
                " ",
                /* @__PURE__ */ jsx("strong", { children: "metodo esperienziale e socializzante" }),
                " ",
                "per stimolare la curiosità e l’interesse, consolidare le conoscenze e migliorare il coinvolgimento di tutti i partecipanti in ottica inclusiva; ",
                /* @__PURE__ */ jsx("strong", { children: "l’interdisciplinarità" }),
                " ",
                "per allenarsi a stabilire connessioni in modo da acquisire un atteggiamento mentale aperto e consapevole;",
                " ",
                /* @__PURE__ */ jsx("strong", { children: "l’imparare divertendosi" }),
                " in cui le attività assecondano la naturale inclinazione degli studenti verso il gioco, predisponendoli ad un atteggiamento positivo e propositivo. Per questi ordini di scuola siamo in grado di",
                " ",
                /* @__PURE__ */ jsx("strong", { children: "personalizzare i laboratori a seconda delle vostre richiesta didattiche e curricolari" }),
                "."
              ] }),
              /* @__PURE__ */ jsx("h2", { className: "my-10 text-3xl font-semibold", children: "LABORATORI PERMANENTI PRESSO IL CHIOSTRO DI VOLTORRE" }),
              /* @__PURE__ */ jsx("p", { className: "mt-5", children: "Remida Varese ha allestito presso la sua sede dei contesti ludici di apprendimento per ognuna delle seguenti attività, che una volta terminate prevedono il riordino dei materiali riutilizzati:" }),
              /* @__PURE__ */ jsxs("p", { className: "mt-5", children: [
                /* @__PURE__ */ jsx("strong", { children: "GIORNATA DI ACCOGLIENZA A INIZIO ANNO SCOLASTICO" }),
                " ",
                "– classi di 1° secondaria di primo e secondo grado"
              ] }),
              /* @__PURE__ */ jsxs("p", { className: "mt-5", children: [
                "Gli obiettivi primari del",
                " ",
                /* @__PURE__ */ jsx("strong", { children: "periodo di accoglienza" }),
                " nel nuovo istituto di scuola secondaria sono di disporre l’allievo/a ad un",
                " ",
                /* @__PURE__ */ jsx("strong", { children: "approccio collaborativo con gli insegnanti e con i nuovi compagni/e di classe" }),
                " ",
                "e di consolidare una seria motivazione all’apprendimento e allo studio. Per concorrere alla migliore riuscita dell’accoglienza proponiamo una serie di attività creative e di gruppo per un’intera giornata, compreso un pranzo al sacco condiviso."
              ] }),
              /* @__PURE__ */ jsxs("p", { className: "mt-5", children: [
                /* @__PURE__ */ jsx("strong", { children: "CORPO ALLE EMOZIONI" }),
                " – CREATIVITÁ E CONSAPEVOLEZZA – tutte le classi"
              ] }),
              /* @__PURE__ */ jsx("p", { className: "mt-5", children: "Laboratorio creativo in piccoli gruppi adattabile, a livelli diversi, a tutte le classi della Scuola secondaria. Stimoliamo gli studenti in piccoli gruppi a scegliere un’emozione e a rappresentarla tridimensionalmente con i materiali non strutturati a disposizione. Rabbia, paura, tristezza, ansia, vergogna, felicità e altre emozioni offrono un'esperienza unica e coinvolgente per esprimere e scoprire nuove sfumature del proprio mondo interiore." }),
              /* @__PURE__ */ jsxs("p", { className: "mt-5", children: [
                /* @__PURE__ */ jsx("strong", { children: "CITTÁ SOSTENIBILE" }),
                " – MACRO COSTRUTTIVITÁ E COOPERAZIONE – tutto il quinquennio"
              ] }),
              /* @__PURE__ */ jsx("p", { className: "mt-5", children: "Utilizzando i linguaggi universali della creatività e della manualità, ogni gruppo di adolescenti progetta e realizza la propria città, concentrandosi sugli aspetti della sostenibilità ambientale e sociale." }),
              /* @__PURE__ */ jsxs("p", { className: "mt-5", children: [
                /* @__PURE__ */ jsx("strong", { children: "RITRATTI" }),
                " – CREATIVITÁ, COOPERAZIONE E NARRAZIONE – tutto il quinquennio"
              ] }),
              /* @__PURE__ */ jsx("p", { className: "mt-5", children: "L’auto ed etero rappresentazione offrono molti spunti, attraverso il filtro della creatività, per parlare di sé ed entrare in relazione con gli altri. Esprimere la personalità con l’utilizzo di materiali non strutturati su semplici basi di recupero non è solo divertimento, ma definizione divergente dell’identità." }),
              /* @__PURE__ */ jsxs("p", { className: "mt-5", children: [
                /* @__PURE__ */ jsx("strong", { children: "GIOCARE CON I SUONI" }),
                " – SONORITÁ E COOPERAZIONE"
              ] }),
              /* @__PURE__ */ jsx("p", { className: "mt-5", children: "Attraverso l’uso dei materiali non strutturati, la creatività e la manualità si ottenere suoni di vario genere. Sperimentando ed analizzando i diversi suoni e timbri ricavabili da oggetti (metalli, plastica, carta e cartoni, legni, pietra ecc.), si eseguiranno semplici brani e sonorizzazioni, formando un’orchestra estemporanea." }),
              /* @__PURE__ */ jsx("h2", { className: "my-10 text-3xl font-semibold", children: "LABORATORI ITINERANTI PRESSO LA SEDE DELLE SCUOLE" }),
              /* @__PURE__ */ jsxs("p", { className: "mt-5", children: [
                "Gli stessi laboratori si possono realizzare nelle vostre sedi, in spazi idonei. Una sola attività o una serie di esperienze evitando la trasferta verso il Chiostro di Voltorre,",
                " ",
                /* @__PURE__ */ jsx("strong", { children: "con o senza genitori" }),
                "."
              ] }),
              /* @__PURE__ */ jsx("p", { className: "mt-5", children: /* @__PURE__ */ jsx("strong", { children: "Compilate il form sottostante per ricevere una proposta ad hoc." }) })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        motion.section,
        {
          initial: "hidden",
          whileInView: "visible",
          viewport: { once: true },
          variants,
          className: "grid place-items-center p-2 md:p-10 dark:bg-slate-500 dark:text-white",
          children: [
            /* @__PURE__ */ jsx("div", { className: "", children: /* @__PURE__ */ jsx("h2", { className: "mb-10 text-6xl", children: "Contattaci" }) }),
            /* @__PURE__ */ jsxs("div", { className: "mx-auto w-full p-5 md:w-5/12 md:p-0", children: [
              wasSuccessful && /* @__PURE__ */ jsx("div", { className: "mb-5 w-full rounded-lg bg-emerald-500 p-5 text-center text-white", children: flash.message }),
              /* @__PURE__ */ jsxs(
                "form",
                {
                  className: "space-y-3 rounded-xl bg-gray-200 p-10 text-black shadow-lg dark:bg-slate-600",
                  onSubmit: submit,
                  children: [
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx(
                        InputLabel,
                        {
                          htmlFor: "name",
                          value: "Nome Contatto",
                          className: "mb-2 text-xl dark:text-white"
                        }
                      ),
                      /* @__PURE__ */ jsx(
                        TextInput,
                        {
                          type: "text",
                          name: "name",
                          id: "name",
                          required: true,
                          placeholder: "Nome Contatto",
                          value: data.name,
                          onChange: (e) => setData("name", e.target.value),
                          className: `w-full ${errors.name && "border-red-500"}`
                        }
                      ),
                      errors.name && /* @__PURE__ */ jsx(InputError, { message: errors.name })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx(
                        InputLabel,
                        {
                          htmlFor: "email",
                          value: "Indirizzo Email",
                          className: "mb-2 text-xl dark:text-white"
                        }
                      ),
                      /* @__PURE__ */ jsx(
                        TextInput,
                        {
                          type: "email",
                          name: "email",
                          id: "email",
                          required: true,
                          placeholder: "Indirizzo Email",
                          value: data.email,
                          onChange: (e) => setData("email", e.target.value),
                          className: `w-full ${errors.email && "border-red-500"}`
                        }
                      ),
                      errors.email && /* @__PURE__ */ jsx(InputError, { message: errors.email })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx(
                        InputLabel,
                        {
                          htmlFor: "phone",
                          value: "Numero di Telefono",
                          className: "mb-2 text-xl dark:text-white"
                        }
                      ),
                      /* @__PURE__ */ jsx(
                        TextInput,
                        {
                          type: "text",
                          name: "phone",
                          id: "phone",
                          required: true,
                          placeholder: "Numero di Telefono",
                          value: data.phone,
                          onChange: (e) => setData("phone", e.target.value),
                          className: `w-full ${errors.phone && "border-red-500"}`
                        }
                      ),
                      errors.phone && /* @__PURE__ */ jsx(InputError, { message: errors.phone })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx(
                        InputLabel,
                        {
                          htmlFor: "school",
                          value: "Seleziona il tipo di Scuola",
                          className: "mb-2 text-xl dark:text-white"
                        }
                      ),
                      /* @__PURE__ */ jsxs(
                        "select",
                        {
                          id: "school",
                          name: "school",
                          required: true,
                          value: data.school,
                          onChange: (e) => setData("school", e.target.value),
                          className: `mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 shadow-sm ${errors.school && "border-red-500"}`,
                          children: [
                            /* @__PURE__ */ jsx("option", { value: "", children: "Seleziona il tipo di scuola" }),
                            /* @__PURE__ */ jsx("option", { value: "nido", children: "Nido" }),
                            /* @__PURE__ */ jsx("option", { value: "scuola_dell_infanzia", children: "Scuola dell'infanzia" }),
                            /* @__PURE__ */ jsx("option", { value: "scuola_primaria", children: "Scuola primaria" }),
                            /* @__PURE__ */ jsx("option", { value: "scuola_secondaria", children: "Scuola secondaria" })
                          ]
                        }
                      ),
                      errors.school && /* @__PURE__ */ jsx(InputError, { message: errors.school })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx(
                        InputLabel,
                        {
                          htmlFor: "message",
                          value: "Il Tuo Messaggio",
                          className: "mb-2 text-xl dark:text-white"
                        }
                      ),
                      /* @__PURE__ */ jsx(
                        "textarea",
                        {
                          id: "message",
                          name: "message",
                          required: true,
                          placeholder: "Scrivi il tuo messaggio qui...",
                          value: data.message,
                          onChange: (e) => setData("message", e.target.value),
                          className: `mt-1 block w-full resize-none rounded-md border border-gray-300 px-3 py-2 shadow-sm ${errors.message && "border-red-500"}`,
                          rows: "4"
                        }
                      ),
                      errors.message && /* @__PURE__ */ jsx(InputError, { message: errors.message })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center text-black dark:text-white", children: [
                      /* @__PURE__ */ jsx(
                        "input",
                        {
                          type: "checkbox",
                          required: true,
                          checked: data.privacy,
                          onChange: (e) => setData("privacy", e.target.checked),
                          className: "mr-2"
                        }
                      ),
                      /* @__PURE__ */ jsxs(
                        "p",
                        {
                          className: `${errors.privacy && "text-red-500"}`,
                          children: [
                            "Dichiaro di aver preso visione della",
                            " ",
                            /* @__PURE__ */ jsx(
                              "a",
                              {
                                href: "#",
                                className: "inline text-red-500 underline",
                                children: "Privacy Policy"
                              }
                            ),
                            ", pertanto presto il mio consenso al trattamento dei dati per ricevere le informazioni richieste."
                          ]
                        }
                      ),
                      errors.privacy && /* @__PURE__ */ jsx(InputError, { children: errors.privacy })
                    ] }),
                    /* @__PURE__ */ jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsx(
                      "button",
                      {
                        className: "mt-2 w-full rounded-3xl bg-red-800 px-6 py-3 font-semibold text-white shadow-lg transition-colors hover:bg-red-900",
                        disabled: processing,
                        children: "Invia"
                      }
                    ) })
                  ]
                }
              )
            ] })
          ]
        }
      )
    ] })
  ] });
}
const __vite_glob_0_25 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Laboratories
}, Symbol.toStringTag, { value: "Module" }));
function Other() {
  const { flash } = usePage().props;
  const {
    data,
    setData,
    post,
    processing,
    errors,
    wasSuccessful,
    clearErrors,
    reset
  } = useForm({
    name: "",
    email: "",
    phone: "",
    message: "",
    privacy: false
  });
  const submit = (e) => {
    e.preventDefault();
    post(route("contact.generic"), {
      preserveScroll: true,
      preserveState: true,
      onSuccess: () => {
        reset("name", "email", "phone", "message", "privacy");
        clearErrors();
      }
    });
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Head, { children: [
      /* @__PURE__ */ jsx("title", { children: "REMIDA VARESE - Innoviamo con creatività | Laboratori per Atri Enti" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "" }),
      /* @__PURE__ */ jsx(
        "link",
        {
          rel: "canonical",
          href: "https://remidavarese.it/laboratori-per-altri-enti"
        }
      )
    ] }),
    /* @__PURE__ */ jsxs(PublicLayout, { children: [
      /* @__PURE__ */ jsxs("section", { className: "mt-[110px] grid h-screen grid-cols-1 bg-black/60 p-5 md:grid-cols-3 md:p-0 lg:mt-0", children: [
        /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center text-white", children: /* @__PURE__ */ jsxs(
          motion.h1,
          {
            initial: "hidden",
            animate: "visible",
            variants,
            className: "w-9/12 py-5 text-3xl md:text-6xl",
            children: [
              /* @__PURE__ */ jsx("span", { className: "font-bold", children: "Laboratori per Altri Enti" }),
              /* @__PURE__ */ jsxs("p", { className: "mt-5 text-xl md:text-2xl", children: [
                /* @__PURE__ */ jsx("strong", { children: "I nostri laboratori" }),
                " creativi di sensibilizzazione alla sostenibilità ambientale",
                /* @__PURE__ */ jsx("strong", { children: "per famiglie" }),
                " si possono realizzare",
                " ",
                /* @__PURE__ */ jsx("strong", { children: "durante manifestazioni ed eventi pubblici" }),
                " ",
                "organizzati da Enti Locali, Pro Loco, Associazioni ecc. e",
                /* @__PURE__ */ jsx("strong", { children: "presso le sedi di organizzazioni" }),
                " ",
                "come Comunità, Centri diurni, RSA, Fondazioni ecc.",
                " ",
                /* @__PURE__ */ jsx("strong", { children: "per ospiti con disabilità, anziani, minori ecc." })
              ] })
            ]
          }
        ) }),
        /* @__PURE__ */ jsx("div", { className: "col-span-2", children: /* @__PURE__ */ jsx(
          "img",
          {
            className: "h-screen w-full object-cover opacity-90",
            src: "/images/other.webp",
            alt: ""
          }
        ) })
      ] }),
      /* @__PURE__ */ jsxs(
        motion.section,
        {
          initial: "hidden",
          whileInView: "visible",
          viewport: { once: true },
          variants,
          className: "grid grid-cols-1 bg-transparent md:grid-cols-2 dark:bg-slate-600",
          children: [
            /* @__PURE__ */ jsxs("div", { className: "rounded-lg border-2 border-red-200 bg-slate-600 p-10 text-2xl text-white", children: [
              /* @__PURE__ */ jsx("h2", { className: "mb-10 text-center text-6xl", children: "Comunità, Centri Diurni, RSA, Fondazioni" }),
              /* @__PURE__ */ jsxs("p", { children: [
                /* @__PURE__ */ jsx("strong", { children: "L'arte e la creatività sono linguaggi" }),
                " ",
                "estremamente forti che mettono a disposizione di ciascuna persona di",
                " ",
                /* @__PURE__ */ jsx("strong", { children: "qualsiasi età, con o senza disabilità" }),
                ", uno strumento di comunicazione universale, immediato, diretto, spontaneo, istintivo, privo di filtri. ",
                /* @__PURE__ */ jsx("strong", { children: "Il processo creativo" }),
                ", coinvolgendo le funzioni percettive, attentive e cognitive di una persona, è infatti un esercizio complesso che",
                " ",
                /* @__PURE__ */ jsx("strong", { children: "spinge a sviluppare un comportamento coordinato, frutto dell'integrazione di tutte le funzioni psichiche e motorie" }),
                "."
              ] }),
              /* @__PURE__ */ jsxs("p", { className: "mt-5", children: [
                /* @__PURE__ */ jsx("strong", { children: "I nostri laboratori" }),
                ", da concordare per tipologia con il committente, come sempre proposti attraverso il riutilizzo di materiali di scarto aziendale e artigianale,",
                " ",
                /* @__PURE__ */ jsx("strong", { children: "hanno l'obiettivo" }),
                " di far vivere ai partecipanti una",
                " ",
                /* @__PURE__ */ jsx("strong", { children: "sensazione di soddisfazione" }),
                " per l’opera prodotta ed un altrettanto fondamentale",
                " ",
                /* @__PURE__ */ jsx("strong", { children: "senso di rilassamento e benessere" }),
                " ",
                "che il processo creativo è capace di indurre, oltre che la naturale propensione alla sostenibilità ambientale."
              ] }),
              /* @__PURE__ */ jsx("p", { className: "mt-5", children: "Hanno collaborato con noi: Fondazione Renato Piatti Onlus di Varese, Il Millepiedi Onlus Coop. Soc. di Varese, RSA Bernacchi di Gavirate" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "rounded-lg border-2 border-red-200 bg-slate-300 p-10 text-2xl text-black dark:bg-slate-400", children: [
              /* @__PURE__ */ jsx("h2", { className: "mb-10 text-center text-6xl", children: "Enti Locali, Pro Loco, Associazioni" }),
              /* @__PURE__ */ jsxs("p", { children: [
                /* @__PURE__ */ jsx("strong", { children: "Piazze, parchi, aree verdi e tensostrutture" }),
                " ",
                "sono solo alcuni luoghi dove vari Enti organizzano eventi e dove le famiglie con bambini si ritrovano per passare del buon tempo assieme. Sono punti di aggregazione in cui si sviluppano dei rapporti umani, sociali e dunque di intrattenimento.",
                " ",
                /* @__PURE__ */ jsx("strong", { children: "L'obiettivo delle nostre proposte" }),
                ", uniche per la loro originalità, è quello di",
                " ",
                /* @__PURE__ */ jsx("strong", { children: "promuovere la creatività" }),
                " con i materiali non strutturati e",
                " ",
                /* @__PURE__ */ jsx("strong", { children: "sensibilizzare i partecipanti alla sostenibilità ambientale" }),
                "."
              ] }),
              /* @__PURE__ */ jsx("p", { className: "mt-5", children: "Hanno collaborato con noi: Comuni di Varese Busto Arsizio, Gazzada Schianno, Laveno Mombello, Albizzate, Angera, Besozzo, Gorla Maggiore, Sangiano, Pro Loco di Brenta, Oratorio di Travedona Monate, Parco Regionale Campo dei Fiori." })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        motion.section,
        {
          initial: "hidden",
          whileInView: "visible",
          viewport: { once: true },
          variants,
          className: "grid place-items-center p-2 md:p-10 dark:bg-slate-500 dark:text-white",
          children: [
            /* @__PURE__ */ jsx("div", { className: "", children: /* @__PURE__ */ jsx("h2", { className: "mb-10 text-6xl", children: "Contattaci" }) }),
            /* @__PURE__ */ jsxs("div", { className: "mx-auto w-full p-5 md:w-5/12 md:p-0", children: [
              wasSuccessful && /* @__PURE__ */ jsx("div", { className: "mb-5 w-full rounded-lg bg-emerald-500 p-5 text-center text-white", children: flash.message }),
              /* @__PURE__ */ jsxs(
                "form",
                {
                  className: "space-y-3 rounded-xl bg-gray-200 p-10 text-black shadow-lg dark:bg-slate-600",
                  onSubmit: submit,
                  children: [
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx(
                        InputLabel,
                        {
                          htmlFor: "name",
                          value: "Nome Contatto",
                          className: "mb-2 text-xl dark:text-white"
                        }
                      ),
                      /* @__PURE__ */ jsx(
                        TextInput,
                        {
                          type: "text",
                          name: "name",
                          id: "name",
                          required: true,
                          placeholder: "Nome Contatto",
                          value: data.name,
                          onChange: (e) => setData("name", e.target.value),
                          className: `w-full ${errors.name && "border-red-500"}`
                        }
                      ),
                      errors.name && /* @__PURE__ */ jsx(InputError, { message: errors.name })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx(
                        InputLabel,
                        {
                          htmlFor: "email",
                          value: "Indirizzo Email",
                          className: "mb-2 text-xl dark:text-white"
                        }
                      ),
                      /* @__PURE__ */ jsx(
                        TextInput,
                        {
                          type: "email",
                          name: "email",
                          id: "email",
                          required: true,
                          placeholder: "Indirizzo Email",
                          value: data.email,
                          onChange: (e) => setData("email", e.target.value),
                          className: `w-full ${errors.email && "border-red-500"}`
                        }
                      ),
                      errors.email && /* @__PURE__ */ jsx(InputError, { message: errors.email })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx(
                        InputLabel,
                        {
                          htmlFor: "phone",
                          value: "Numero di Telefono",
                          className: "mb-2 text-xl dark:text-white"
                        }
                      ),
                      /* @__PURE__ */ jsx(
                        TextInput,
                        {
                          type: "text",
                          name: "phone",
                          id: "phone",
                          required: true,
                          placeholder: "Numero di Telefono",
                          value: data.phone,
                          onChange: (e) => setData("phone", e.target.value),
                          className: `w-full ${errors.phone && "border-red-500"}`
                        }
                      ),
                      errors.phone && /* @__PURE__ */ jsx(InputError, { message: errors.phone })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx(
                        InputLabel,
                        {
                          htmlFor: "message",
                          value: "Il Tuo Messaggio",
                          className: "mb-2 text-xl dark:text-white"
                        }
                      ),
                      /* @__PURE__ */ jsx(
                        "textarea",
                        {
                          id: "message",
                          name: "message",
                          required: true,
                          placeholder: "Scrivi il tuo messaggio qui...",
                          value: data.message,
                          onChange: (e) => setData("message", e.target.value),
                          className: `mt-1 block w-full resize-none rounded-md border border-gray-300 px-3 py-2 shadow-sm ${errors.message && "border-red-500"}`,
                          rows: "4"
                        }
                      ),
                      errors.message && /* @__PURE__ */ jsx(InputError, { message: errors.message })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center text-black dark:text-white", children: [
                      /* @__PURE__ */ jsx(
                        "input",
                        {
                          type: "checkbox",
                          required: true,
                          checked: data.privacy,
                          onChange: (e) => setData("privacy", e.target.checked),
                          className: "mr-2"
                        }
                      ),
                      /* @__PURE__ */ jsxs(
                        "p",
                        {
                          className: `${errors.privacy && "text-red-500"}`,
                          children: [
                            "Dichiaro di aver preso visione della",
                            " ",
                            /* @__PURE__ */ jsx(
                              "a",
                              {
                                href: "#",
                                className: "inline text-red-500 underline",
                                children: "Privacy Policy"
                              }
                            ),
                            ", pertanto presto il mio consenso al trattamento dei dati per ricevere le informazioni richieste."
                          ]
                        }
                      ),
                      errors.privacy && /* @__PURE__ */ jsx(InputError, { children: errors.privacy })
                    ] }),
                    /* @__PURE__ */ jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsx(
                      "button",
                      {
                        className: "mt-2 w-full rounded-3xl bg-red-800 px-6 py-3 font-semibold text-white shadow-lg transition-colors hover:bg-red-900",
                        disabled: processing,
                        children: "Invia"
                      }
                    ) })
                  ]
                }
              )
            ] })
          ]
        }
      )
    ] })
  ] });
}
const __vite_glob_0_26 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Other
}, Symbol.toStringTag, { value: "Module" }));
function Special() {
  const { flash } = usePage().props;
  const {
    data,
    setData,
    post,
    processing,
    errors,
    wasSuccessful,
    clearErrors,
    reset
  } = useForm({
    name: "",
    email: "",
    phone: "",
    message: "",
    privacy: false
  });
  const submit = (e) => {
    e.preventDefault();
    post(route("contact.generic"), {
      preserveScroll: true,
      preserveState: true,
      onSuccess: () => {
        reset("name", "email", "phone", "message", "privacy");
        clearErrors();
      }
    });
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Head, { children: [
      /* @__PURE__ */ jsx("title", { children: "REMIDA VARESE - Innoviamo con creatività | Progetti Speciali" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "" }),
      /* @__PURE__ */ jsx(
        "link",
        {
          rel: "canonical",
          href: "https://remidavarese.it/laboratori-speciali"
        }
      )
    ] }),
    /* @__PURE__ */ jsxs(PublicLayout, { children: [
      /* @__PURE__ */ jsxs("section", { className: "mt-[110px] grid h-screen grid-cols-1 bg-black/60 p-5 md:grid-cols-3 md:p-0 lg:mt-0", children: [
        /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center text-white", children: /* @__PURE__ */ jsxs(
          motion.h1,
          {
            initial: "hidden",
            animate: "visible",
            variants,
            className: "w-9/12 py-5 text-3xl md:text-6xl",
            children: [
              /* @__PURE__ */ jsx("span", { className: "font-bold", children: "Progetti Speciali" }),
              /* @__PURE__ */ jsxs("p", { className: "mt-5 text-xl md:text-2xl", children: [
                "Installazioni interattive, creazioni artistiche e laboratori creati su misura, in collaborazione con vari Enti, per",
                " ",
                /* @__PURE__ */ jsx("strong", { children: "rendere unico l’evento" }),
                " a cui partecipiamo e promuovere contemporaneamente la sostenibilità ambientale, in quanto il materiale utilizzato è esclusivamente scarto aziendale o artigianale."
              ] })
            ]
          }
        ) }),
        /* @__PURE__ */ jsx("div", { className: "col-span-2", children: /* @__PURE__ */ jsx(
          "img",
          {
            className: "h-screen w-full object-cover opacity-90",
            src: "/images/special.webp",
            alt: ""
          }
        ) })
      ] }),
      /* @__PURE__ */ jsx(
        motion.section,
        {
          initial: "hidden",
          whileInView: "visible",
          viewport: { once: true },
          variants,
          className: "bg-transparent dark:bg-slate-500 dark:text-white",
          children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl px-5 py-10 text-2xl", children: /* @__PURE__ */ jsx("p", { children: "Hanno collaborato con noi BAM Milano, Fuori Salone del Mobile Milano, Mandala Experience, Design week Varese, Comune di Germignaga, Comune di Besozzo, Camera di Commercio Varese, Comune di Gavirate, Festival Microcosmi di Comerio, IBSA Lugano, Alzheimer Fest aps" }) })
        }
      ),
      /* @__PURE__ */ jsxs(
        motion.section,
        {
          initial: "hidden",
          whileInView: "visible",
          viewport: { once: true },
          variants,
          className: "grid place-items-center p-2 md:p-10 dark:bg-slate-500 dark:text-white",
          children: [
            /* @__PURE__ */ jsx("div", { className: "", children: /* @__PURE__ */ jsx("h2", { className: "mb-10 text-6xl", children: "Contattaci" }) }),
            /* @__PURE__ */ jsxs("div", { className: "mx-auto w-full p-5 md:w-5/12 md:p-0", children: [
              wasSuccessful && /* @__PURE__ */ jsx("div", { className: "mb-5 w-full rounded-lg bg-emerald-500 p-5 text-center text-white", children: flash.message }),
              /* @__PURE__ */ jsxs(
                "form",
                {
                  className: "space-y-3 rounded-xl bg-gray-200 p-10 text-black shadow-lg dark:bg-slate-600",
                  onSubmit: submit,
                  children: [
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx(
                        InputLabel,
                        {
                          htmlFor: "name",
                          value: "Nome Contatto",
                          className: "mb-2 text-xl dark:text-white"
                        }
                      ),
                      /* @__PURE__ */ jsx(
                        TextInput,
                        {
                          type: "text",
                          name: "name",
                          id: "name",
                          required: true,
                          placeholder: "Nome Contatto",
                          value: data.name,
                          onChange: (e) => setData("name", e.target.value),
                          className: `w-full ${errors.name && "border-red-500"}`
                        }
                      ),
                      errors.name && /* @__PURE__ */ jsx(InputError, { message: errors.name })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx(
                        InputLabel,
                        {
                          htmlFor: "email",
                          value: "Indirizzo Email",
                          className: "mb-2 text-xl dark:text-white"
                        }
                      ),
                      /* @__PURE__ */ jsx(
                        TextInput,
                        {
                          type: "email",
                          name: "email",
                          id: "email",
                          required: true,
                          placeholder: "Indirizzo Email",
                          value: data.email,
                          onChange: (e) => setData("email", e.target.value),
                          className: `w-full ${errors.email && "border-red-500"}`
                        }
                      ),
                      errors.email && /* @__PURE__ */ jsx(InputError, { message: errors.email })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx(
                        InputLabel,
                        {
                          htmlFor: "phone",
                          value: "Numero di Telefono",
                          className: "mb-2 text-xl dark:text-white"
                        }
                      ),
                      /* @__PURE__ */ jsx(
                        TextInput,
                        {
                          type: "text",
                          name: "phone",
                          id: "phone",
                          required: true,
                          placeholder: "Numero di Telefono",
                          value: data.phone,
                          onChange: (e) => setData("phone", e.target.value),
                          className: `w-full ${errors.phone && "border-red-500"}`
                        }
                      ),
                      errors.phone && /* @__PURE__ */ jsx(InputError, { message: errors.phone })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx(
                        InputLabel,
                        {
                          htmlFor: "message",
                          value: "Il Tuo Messaggio",
                          className: "mb-2 text-xl dark:text-white"
                        }
                      ),
                      /* @__PURE__ */ jsx(
                        "textarea",
                        {
                          id: "message",
                          name: "message",
                          required: true,
                          placeholder: "Scrivi il tuo messaggio qui...",
                          value: data.message,
                          onChange: (e) => setData("message", e.target.value),
                          className: `mt-1 block w-full resize-none rounded-md border border-gray-300 px-3 py-2 shadow-sm ${errors.message && "border-red-500"}`,
                          rows: "4"
                        }
                      ),
                      errors.message && /* @__PURE__ */ jsx(InputError, { message: errors.message })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center text-black dark:text-white", children: [
                      /* @__PURE__ */ jsx(
                        "input",
                        {
                          type: "checkbox",
                          required: true,
                          checked: data.privacy,
                          onChange: (e) => setData("privacy", e.target.checked),
                          className: "mr-2"
                        }
                      ),
                      /* @__PURE__ */ jsxs(
                        "p",
                        {
                          className: `${errors.privacy && "text-red-500"}`,
                          children: [
                            "Dichiaro di aver preso visione della",
                            " ",
                            /* @__PURE__ */ jsx(
                              "a",
                              {
                                href: "#",
                                className: "inline text-red-500 underline",
                                children: "Privacy Policy"
                              }
                            ),
                            ", pertanto presto il mio consenso al trattamento dei dati per ricevere le informazioni richieste."
                          ]
                        }
                      ),
                      errors.privacy && /* @__PURE__ */ jsx(InputError, { children: errors.privacy })
                    ] }),
                    /* @__PURE__ */ jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsx(
                      "button",
                      {
                        className: "mt-2 w-full rounded-3xl bg-red-800 px-6 py-3 font-semibold text-white shadow-lg transition-colors hover:bg-red-900",
                        disabled: processing,
                        children: "Invia"
                      }
                    ) })
                  ]
                }
              )
            ] })
          ]
        }
      )
    ] })
  ] });
}
const __vite_glob_0_27 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Special
}, Symbol.toStringTag, { value: "Module" }));
function Training() {
  const { flash } = usePage().props;
  const {
    data,
    setData,
    post,
    processing,
    errors,
    wasSuccessful,
    clearErrors,
    reset
  } = useForm({
    name: "",
    email: "",
    phone: "",
    message: "",
    privacy: false
  });
  const submit = (e) => {
    e.preventDefault();
    post(route("contact.training"), {
      preserveScroll: true,
      preserveState: true,
      onSuccess: () => {
        reset("name", "email", "phone", "message", "privacy");
        clearErrors();
      }
    });
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Head, { children: [
      /* @__PURE__ */ jsx("title", { children: "REMIDA VARESE - Innoviamo con creatività | Formazione" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "" }),
      /* @__PURE__ */ jsx(
        "link",
        {
          rel: "canonical",
          href: "https://remidavarese.it/formazione"
        }
      )
    ] }),
    /* @__PURE__ */ jsxs(PublicLayout, { children: [
      /* @__PURE__ */ jsxs("section", { className: "mt-[110px] grid h-screen grid-cols-1 bg-black/60 p-5 md:grid-cols-3 md:p-0 lg:mt-0", children: [
        /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center text-white", children: /* @__PURE__ */ jsxs(
          motion.h1,
          {
            initial: "hidden",
            animate: "visible",
            variants,
            className: "w-9/12 py-5 text-3xl md:text-6xl",
            children: [
              /* @__PURE__ */ jsx("span", { className: "font-bold", children: "Formazione" }),
              /* @__PURE__ */ jsx("p", { className: "mt-5 text-xl md:text-2xl", children: "I percorsi ideati si concentrano non solo sulla conoscenza del metodo per la progettazione e realizzazione di attività ma si indirizzano anche verso l’arte, la logica, l’estetica e la documentazione." })
            ]
          }
        ) }),
        /* @__PURE__ */ jsx("div", { className: "col-span-2", children: /* @__PURE__ */ jsx(
          "img",
          {
            className: "h-screen w-full object-cover opacity-90",
            src: "/images/training.webp",
            alt: ""
          }
        ) })
      ] }),
      /* @__PURE__ */ jsx(
        motion.section,
        {
          initial: "hidden",
          whileInView: "visible",
          viewport: { once: true },
          variants,
          className: "bg-transparent dark:bg-slate-500 dark:text-white",
          children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl px-5 py-10 text-2xl", children: /* @__PURE__ */ jsxs("p", { children: [
            "Proponiamo corsi di",
            " ",
            /* @__PURE__ */ jsx("strong", { children: "formazione, consulenze, supervisioni metodologiche e incontri" }),
            " ",
            "rivolti direttamente a equipe educative di Asilo Nido, Scuola dell’Infanzia, insegnanti di Scuola Primaria e Secondaria, RSA, Cooperative, Imprese Sociali, Associazioni, Enti Pubblici e Privati, gruppi di adulti intenzionati ad approcciarsi alla metodologia del “Reggio Emilia Approach” o indirettamente attraverso collaborazioni con Associazioni di categoria come Ascom e Agenzie di servizi per le imprese."
          ] }) })
        }
      ),
      /* @__PURE__ */ jsxs(
        motion.section,
        {
          initial: "hidden",
          whileInView: "visible",
          viewport: { once: true },
          variants,
          className: "grid grid-cols-1 bg-transparent md:grid-cols-2 dark:bg-slate-600",
          children: [
            /* @__PURE__ */ jsxs("div", { className: "rounded-lg border-2 border-red-200 bg-slate-600 p-10 text-2xl text-white", children: [
              /* @__PURE__ */ jsx("h2", { className: "mb-10 text-center text-6xl", children: "Formazione" }),
              /* @__PURE__ */ jsxs("p", { children: [
                "I nostri apprezzati percorsi formativi “",
                /* @__PURE__ */ jsx("strong", { children: "Materiali non strutturati di origine aziendale e artigianale per la promozione della creatività" }),
                "” e “",
                /* @__PURE__ */ jsx("strong", { children: "Materiali naturali come risorsa educativa" }),
                "” sono",
                " ",
                /* @__PURE__ */ jsx("strong", { children: "rivolti all’intera equipe educativa" }),
                " ",
                "di un’organizzazione 0 – 6 anni, che sia un Asilo Nido, una Scuola dell’Infanzia o un sistema integrato e si svolge interamente in presenza, inizialmente presso i nostri spazi al Chiostro di Voltorre e successivamente presso la struttura della committenza."
              ] }),
              /* @__PURE__ */ jsxs("p", { className: "mt-5", children: [
                "La formazione è un",
                " ",
                /* @__PURE__ */ jsx("strong", { children: "percorso di costruzione" }),
                ", continua e graduale, di pratiche esperienziali, riflessioni e condivisioni che porta il gruppo educativo ad",
                " ",
                /* @__PURE__ */ jsx("strong", { children: "attuare nuove pratiche pedagogiche" }),
                ", adattandole alla propria realtà professionale."
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "rounded-lg border-2 border-red-200 bg-slate-300 p-10 text-2xl text-black dark:bg-slate-400", children: [
              /* @__PURE__ */ jsx("h2", { className: "mb-10 text-center text-6xl", children: "Consulenza" }),
              /* @__PURE__ */ jsxs("p", { children: [
                "Al",
                " ",
                /* @__PURE__ */ jsx("strong", { children: "termine dei nostri percorsi formativi" }),
                " ",
                "è possibile attivare",
                " ",
                /* @__PURE__ */ jsx("strong", { children: "consulenze progettuali e pedagogiche" }),
                ", fortemente interconnesse alla formazione, dedicati al ripensamento, alla riorganizzazione ed eventualmente alla ristrutturazione di",
                " ",
                /* @__PURE__ */ jsx("strong", { children: "spazi interni o esterni" }),
                " agli Asili Nido e Scuole dell’Infanzia, in modo da riflettere la voglia di apprendimento dei bambini che li abitano."
              ] }),
              /* @__PURE__ */ jsxs("p", { className: "mt-5", children: [
                "Spazi, o meglio ",
                /* @__PURE__ */ jsx("strong", { children: "contesti" }),
                ", articolati in ",
                /* @__PURE__ */ jsx("strong", { children: "centri di interesse" }),
                " ",
                "per sostenere l’incontro a piccolo gruppo e per offrire plurime e diversificate possibilità di esplorazione e scoperta nell’incontro con diversi linguaggi, permettendo così ai bambini di esprimersi attraverso le proprie competenze uniche e soggettive."
              ] }),
              /* @__PURE__ */ jsx("p", { className: "mt-5", children: /* @__PURE__ */ jsx("strong", { children: "Spazi Interni" }) }),
              /* @__PURE__ */ jsxs("p", { className: "mt-5", children: [
                "Per gli spazi interni si deve tendere ad un miglioramento in ricchezza e creatività dei contesti ludici di apprendimento, dove sono fondamentali i",
                " ",
                /* @__PURE__ */ jsx("strong", { children: "materiali non strutturati e gli allestimenti" }),
                "."
              ] }),
              /* @__PURE__ */ jsxs("p", { className: "mt-5", children: [
                "Favorire una",
                " ",
                /* @__PURE__ */ jsx("strong", { children: "ricerca tattile e sonora dei materiali" }),
                " ",
                "in una esplorazione multisensoriale totale, proporre",
                " ",
                /* @__PURE__ */ jsx("strong", { children: "fonti luminose" }),
                " che amplificano le caratteristiche degli oggetti, sostenere",
                " ",
                /* @__PURE__ */ jsx("strong", { children: "i processi creativi e costruttivi" }),
                " ",
                "in spazi idonei per dare valore alle loro esperienze conoscitive complesse, sono solo alcune tracce di ricerca che si traducono in concrete riorganizzazioni degli spazi."
              ] }),
              /* @__PURE__ */ jsx("p", { className: "mt-5", children: /* @__PURE__ */ jsx("strong", { children: "Spazi Esterni" }) }),
              /* @__PURE__ */ jsx("p", { className: "mt-5", children: "Gli spazi esterni sono luoghi estremamente ricchi di opportunità educative e formative, alcune più intenzionali se pensate dall’adulto, altre più spontanee se guidate direttamente dall’esplorazione e dalla manipolazione da parte dei bambini." }),
              /* @__PURE__ */ jsxs("p", { className: "mt-5", children: [
                "Pensare a ",
                /* @__PURE__ */ jsx("strong", { children: "zone di quiete" }),
                " con angoli di tranquillità dedicate anche alla relazione tra pari, a ",
                /* @__PURE__ */ jsx("strong", { children: "zone di movimento" }),
                " per l’esercizio di abilità attraverso percorsi sensoriali, a ",
                /* @__PURE__ */ jsx("strong", { children: "zone di gioco" }),
                " ",
                "costruttivo e simbolico è l’inizio di una progettazione che diviene concreta implementazione delle strutture più adatte a tali scopi."
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "rounded-lg border-2 border-red-200 bg-slate-300 p-10 text-2xl text-black dark:bg-slate-400", children: [
              /* @__PURE__ */ jsx("h2", { className: "mb-10 text-center text-6xl", children: "Supervisione Metodologica" }),
              /* @__PURE__ */ jsxs("p", { children: [
                /* @__PURE__ */ jsx("strong", { children: "Breve percorso" }),
                " periodico",
                " ",
                /* @__PURE__ */ jsx("strong", { children: "di confronto e rielaborazione" }),
                " in cui i gruppi di lavoro vengono accompagnati nel valutare le metodologie applicate nella propria realtà professionale."
              ] }),
              /* @__PURE__ */ jsxs("p", { className: "mt-5", children: [
                "Altrimenti detto",
                " ",
                /* @__PURE__ */ jsx("strong", { children: "Team Working (fare gruppo)" }),
                ", la supervisione ha l’obiettivo di consolidare un gruppo di lavoro, creare sinergie che consentano di collaborare per la realizzazione dello scopo comune (mission educativa/professionale)."
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "rounded-lg border-2 border-red-200 bg-slate-600 p-10 text-2xl text-white", children: [
              /* @__PURE__ */ jsx("h2", { className: "mb-10 text-center text-6xl", children: "Incontri" }),
              /* @__PURE__ */ jsx("h2", { className: "my-10 text-3xl font-semibold", children: 'Genitori "in gioco"' }),
              /* @__PURE__ */ jsxs("p", { className: "mt-5", children: [
                "Grazie al gioco e nel gioco è possibile",
                " ",
                /* @__PURE__ */ jsx("strong", { children: "riscoprire il mondo infantile" }),
                ", il proprio e dei propri bambini del Nido e dell’Infanzia, per comprenderlo e conoscerlo",
                " ",
                /* @__PURE__ */ jsx("strong", { children: "in tutta la sua totalità" }),
                ": emotiva, corporea e cognitiva."
              ] }),
              /* @__PURE__ */ jsxs("p", { className: "mt-5", children: [
                "ReMida Varese propone uno spazio ludico e laboratoriale per i genitori e per genitori/figli che ha lo scopo di essere un’esperienza simbolica, che consente di",
                " ",
                /* @__PURE__ */ jsx("strong", { children: '"accorciare" le distanze tra il mondo adulto e l’infanzia' }),
                ", per ritrovare uno sguardo nuovo e rinnovato, da cui è più semplice fare fiorire riflessioni e condivisioni."
              ] }),
              /* @__PURE__ */ jsxs("p", { className: "mt-5", children: [
                "Gli ",
                /* @__PURE__ */ jsx("strong", { children: "incontri sono quattro" }),
                " tra cui",
                " ",
                /* @__PURE__ */ jsx("strong", { children: "uno dedicato solo ai padri" }),
                "."
              ] })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        motion.section,
        {
          initial: "hidden",
          whileInView: "visible",
          viewport: { once: true },
          variants,
          className: "grid place-items-center p-2 md:p-10 dark:bg-slate-500 dark:text-white",
          children: [
            /* @__PURE__ */ jsx("div", { className: "", children: /* @__PURE__ */ jsx("h2", { className: "mb-10 text-6xl", children: "Contattaci" }) }),
            /* @__PURE__ */ jsxs("div", { className: "mx-auto w-full p-5 md:w-5/12 md:p-0", children: [
              wasSuccessful && /* @__PURE__ */ jsx("div", { className: "mb-5 w-full rounded-lg bg-emerald-500 p-5 text-center text-white", children: flash.message }),
              /* @__PURE__ */ jsxs(
                "form",
                {
                  className: "space-y-3 rounded-xl bg-gray-200 p-10 text-black shadow-lg dark:bg-slate-600",
                  onSubmit: submit,
                  children: [
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx(
                        InputLabel,
                        {
                          htmlFor: "name",
                          value: "Nome Contatto",
                          className: "mb-2 text-xl dark:text-white"
                        }
                      ),
                      /* @__PURE__ */ jsx(
                        TextInput,
                        {
                          type: "text",
                          name: "name",
                          id: "name",
                          required: true,
                          placeholder: "Nome Contatto",
                          value: data.name,
                          onChange: (e) => setData("name", e.target.value),
                          className: `w-full ${errors.name && "border-red-500"}`
                        }
                      ),
                      errors.name && /* @__PURE__ */ jsx(InputError, { message: errors.name })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx(
                        InputLabel,
                        {
                          htmlFor: "email",
                          value: "Indirizzo Email",
                          className: "mb-2 text-xl dark:text-white"
                        }
                      ),
                      /* @__PURE__ */ jsx(
                        TextInput,
                        {
                          type: "email",
                          name: "email",
                          id: "email",
                          required: true,
                          placeholder: "Indirizzo Email",
                          value: data.email,
                          onChange: (e) => setData("email", e.target.value),
                          className: `w-full ${errors.email && "border-red-500"}`
                        }
                      ),
                      errors.email && /* @__PURE__ */ jsx(InputError, { message: errors.email })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx(
                        InputLabel,
                        {
                          htmlFor: "phone",
                          value: "Numero di Telefono",
                          className: "mb-2 text-xl dark:text-white"
                        }
                      ),
                      /* @__PURE__ */ jsx(
                        TextInput,
                        {
                          type: "text",
                          name: "phone",
                          id: "phone",
                          required: true,
                          placeholder: "Numero di Telefono",
                          value: data.phone,
                          onChange: (e) => setData("phone", e.target.value),
                          className: `w-full ${errors.phone && "border-red-500"}`
                        }
                      ),
                      errors.phone && /* @__PURE__ */ jsx(InputError, { message: errors.phone })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx(
                        InputLabel,
                        {
                          htmlFor: "message",
                          value: "Il Tuo Messaggio",
                          className: "mb-2 text-xl dark:text-white"
                        }
                      ),
                      /* @__PURE__ */ jsx(
                        "textarea",
                        {
                          id: "message",
                          name: "message",
                          required: true,
                          placeholder: "Scrivi il tuo messaggio qui...",
                          value: data.message,
                          onChange: (e) => setData("message", e.target.value),
                          className: `mt-1 block w-full resize-none rounded-md border border-gray-300 px-3 py-2 shadow-sm ${errors.message && "border-red-500"}`,
                          rows: "4"
                        }
                      ),
                      errors.message && /* @__PURE__ */ jsx(InputError, { message: errors.message })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center text-black dark:text-white", children: [
                      /* @__PURE__ */ jsx(
                        "input",
                        {
                          type: "checkbox",
                          required: true,
                          checked: data.privacy,
                          onChange: (e) => setData("privacy", e.target.checked),
                          className: "mr-2"
                        }
                      ),
                      /* @__PURE__ */ jsxs(
                        "p",
                        {
                          className: `${errors.privacy && "text-red-500"}`,
                          children: [
                            "Dichiaro di aver preso visione della",
                            " ",
                            /* @__PURE__ */ jsx(
                              "a",
                              {
                                href: "#",
                                className: "inline text-red-500 underline",
                                children: "Privacy Policy"
                              }
                            ),
                            ", pertanto presto il mio consenso al trattamento dei dati per ricevere le informazioni richieste."
                          ]
                        }
                      ),
                      errors.privacy && /* @__PURE__ */ jsx(InputError, { children: errors.privacy })
                    ] }),
                    /* @__PURE__ */ jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsx(
                      "button",
                      {
                        className: "mt-2 w-full rounded-3xl bg-red-800 px-6 py-3 font-semibold text-white shadow-lg transition-colors hover:bg-red-900",
                        disabled: processing,
                        children: "Invia"
                      }
                    ) })
                  ]
                }
              )
            ] })
          ]
        }
      )
    ] })
  ] });
}
const __vite_glob_0_28 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Training
}, Symbol.toStringTag, { value: "Module" }));
function Welcome({ auth, laravelVersion, phpVersion }) {
  const handleImageError = () => {
    var _a, _b, _c, _d;
    (_a = document.getElementById("screenshot-container")) == null ? void 0 : _a.classList.add("!hidden");
    (_b = document.getElementById("docs-card")) == null ? void 0 : _b.classList.add("!row-span-1");
    (_c = document.getElementById("docs-card-content")) == null ? void 0 : _c.classList.add("!flex-row");
    (_d = document.getElementById("background")) == null ? void 0 : _d.classList.add("!hidden");
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Welcome" }),
    /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 text-black/50 dark:bg-black dark:text-white/50", children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          id: "background",
          className: "absolute -left-20 top-0 max-w-[877px]",
          src: "https://laravel.com/assets/img/welcome/background.svg"
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "relative min-h-screen flex flex-col items-center justify-center selection:bg-[#FF2D20] selection:text-white", children: /* @__PURE__ */ jsxs("div", { className: "relative w-full max-w-2xl px-6 lg:max-w-7xl", children: [
        /* @__PURE__ */ jsxs("header", { className: "grid grid-cols-2 items-center gap-2 py-10 lg:grid-cols-3", children: [
          /* @__PURE__ */ jsx("div", { className: "flex lg:justify-center lg:col-start-2", children: /* @__PURE__ */ jsx(
            "svg",
            {
              className: "h-12 w-auto text-white lg:h-16 lg:text-[#FF2D20]",
              viewBox: "0 0 62 65",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: /* @__PURE__ */ jsx(
                "path",
                {
                  d: "M61.8548 14.6253C61.8778 14.7102 61.8895 14.7978 61.8897 14.8858V28.5615C61.8898 28.737 61.8434 28.9095 61.7554 29.0614C61.6675 29.2132 61.5409 29.3392 61.3887 29.4265L49.9104 36.0351V49.1337C49.9104 49.4902 49.7209 49.8192 49.4118 49.9987L25.4519 63.7916C25.3971 63.8227 25.3372 63.8427 25.2774 63.8639C25.255 63.8714 25.2338 63.8851 25.2101 63.8913C25.0426 63.9354 24.8666 63.9354 24.6991 63.8913C24.6716 63.8838 24.6467 63.8689 24.6205 63.8589C24.5657 63.8389 24.5084 63.8215 24.456 63.7916L0.501061 49.9987C0.348882 49.9113 0.222437 49.7853 0.134469 49.6334C0.0465019 49.4816 0.000120578 49.3092 0 49.1337L0 8.10652C0 8.01678 0.0124642 7.92953 0.0348998 7.84477C0.0423783 7.8161 0.0598282 7.78993 0.0697995 7.76126C0.0884958 7.70891 0.105946 7.65531 0.133367 7.6067C0.152063 7.5743 0.179485 7.54812 0.20192 7.51821C0.230588 7.47832 0.256763 7.43719 0.290416 7.40229C0.319084 7.37362 0.356476 7.35243 0.388883 7.32751C0.425029 7.29759 0.457436 7.26518 0.498568 7.2415L12.4779 0.345059C12.6296 0.257786 12.8015 0.211853 12.9765 0.211853C13.1515 0.211853 13.3234 0.257786 13.475 0.345059L25.4531 7.2415H25.4556C25.4955 7.26643 25.5292 7.29759 25.5653 7.32626C25.5977 7.35119 25.6339 7.37362 25.6625 7.40104C25.6974 7.43719 25.7224 7.47832 25.7523 7.51821C25.7735 7.54812 25.8021 7.5743 25.8196 7.6067C25.8483 7.65656 25.8645 7.70891 25.8844 7.76126C25.8944 7.78993 25.9118 7.8161 25.9193 7.84602C25.9423 7.93096 25.954 8.01853 25.9542 8.10652V33.7317L35.9355 27.9844V14.8846C35.9355 14.7973 35.948 14.7088 35.9704 14.6253C35.9792 14.5954 35.9954 14.5692 36.0053 14.5405C36.0253 14.4882 36.0427 14.4346 36.0702 14.386C36.0888 14.3536 36.1163 14.3274 36.1375 14.2975C36.1674 14.2576 36.1923 14.2165 36.2272 14.1816C36.2559 14.1529 36.292 14.1317 36.3244 14.1068C36.3618 14.0769 36.3942 14.0445 36.4341 14.0208L48.4147 7.12434C48.5663 7.03694 48.7383 6.99094 48.9133 6.99094C49.0883 6.99094 49.2602 7.03694 49.4118 7.12434L61.3899 14.0208C61.4323 14.0457 61.4647 14.0769 61.5021 14.1055C61.5333 14.1305 61.5694 14.1529 61.5981 14.1803C61.633 14.2165 61.6579 14.2576 61.6878 14.2975C61.7103 14.3274 61.7377 14.3536 61.7551 14.386C61.7838 14.4346 61.8 14.4882 61.8199 14.5405C61.8312 14.5692 61.8474 14.5954 61.8548 14.6253ZM59.893 27.9844V16.6121L55.7013 19.0252L49.9104 22.3593V33.7317L59.8942 27.9844H59.893ZM47.9149 48.5566V37.1768L42.2187 40.4299L25.953 49.7133V61.2003L47.9149 48.5566ZM1.99677 9.83281V48.5566L23.9562 61.199V49.7145L12.4841 43.2219L12.4804 43.2194L12.4754 43.2169C12.4368 43.1945 12.4044 43.1621 12.3682 43.1347C12.3371 43.1097 12.3009 43.0898 12.2735 43.0624L12.271 43.0586C12.2386 43.0275 12.2162 42.9888 12.1887 42.9539C12.1638 42.9203 12.1339 42.8916 12.114 42.8567L12.1127 42.853C12.0903 42.8156 12.0766 42.7707 12.0604 42.7283C12.0442 42.6909 12.023 42.656 12.013 42.6161C12.0005 42.5688 11.998 42.5177 11.9931 42.4691C11.9881 42.4317 11.9781 42.3943 11.9781 42.3569V15.5801L6.18848 12.2446L1.99677 9.83281ZM12.9777 2.36177L2.99764 8.10652L12.9752 13.8513L22.9541 8.10527L12.9752 2.36177H12.9777ZM18.1678 38.2138L23.9574 34.8809V9.83281L19.7657 12.2459L13.9749 15.5801V40.6281L18.1678 38.2138ZM48.9133 9.14105L38.9344 14.8858L48.9133 20.6305L58.8909 14.8846L48.9133 9.14105ZM47.9149 22.3593L42.124 19.0252L37.9323 16.6121V27.9844L43.7219 31.3174L47.9149 33.7317V22.3593ZM24.9533 47.987L39.59 39.631L46.9065 35.4555L36.9352 29.7145L25.4544 36.3242L14.9907 42.3482L24.9533 47.987Z",
                  fill: "currentColor"
                }
              )
            }
          ) }),
          /* @__PURE__ */ jsx("nav", { className: "-mx-3 flex flex-1 justify-end", children: auth.user ? /* @__PURE__ */ jsx(
            Link,
            {
              href: route("dashboard"),
              className: "rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white",
              children: "Dashboard"
            }
          ) : /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsx(
              Link,
              {
                href: route("login"),
                className: "rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white",
                children: "Log in"
              }
            ),
            /* @__PURE__ */ jsx(
              Link,
              {
                href: route("register"),
                className: "rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white",
                children: "Register"
              }
            )
          ] }) })
        ] }),
        /* @__PURE__ */ jsx("main", { className: "mt-6", children: /* @__PURE__ */ jsxs("div", { className: "grid gap-6 lg:grid-cols-2 lg:gap-8", children: [
          /* @__PURE__ */ jsxs(
            "a",
            {
              href: "https://laravel.com/docs",
              id: "docs-card",
              className: "flex flex-col items-start gap-6 overflow-hidden rounded-lg bg-white p-6 shadow-[0px_14px_34px_0px_rgba(0,0,0,0.08)] ring-1 ring-white/[0.05] transition duration-300 hover:text-black/70 hover:ring-black/20 focus:outline-none focus-visible:ring-[#FF2D20] md:row-span-3 lg:p-10 lg:pb-10 dark:bg-zinc-900 dark:ring-zinc-800 dark:hover:text-white/70 dark:hover:ring-zinc-700 dark:focus-visible:ring-[#FF2D20]",
              children: [
                /* @__PURE__ */ jsxs(
                  "div",
                  {
                    id: "screenshot-container",
                    className: "relative flex w-full flex-1 items-stretch",
                    children: [
                      /* @__PURE__ */ jsx(
                        "img",
                        {
                          src: "https://laravel.com/assets/img/welcome/docs-light.svg",
                          alt: "Laravel documentation screenshot",
                          className: "aspect-video h-full w-full flex-1 rounded-[10px] object-top object-cover drop-shadow-[0px_4px_34px_rgba(0,0,0,0.06)] dark:hidden",
                          onError: handleImageError
                        }
                      ),
                      /* @__PURE__ */ jsx(
                        "img",
                        {
                          src: "https://laravel.com/assets/img/welcome/docs-dark.svg",
                          alt: "Laravel documentation screenshot",
                          className: "hidden aspect-video h-full w-full flex-1 rounded-[10px] object-top object-cover drop-shadow-[0px_4px_34px_rgba(0,0,0,0.25)] dark:block"
                        }
                      ),
                      /* @__PURE__ */ jsx("div", { className: "absolute -bottom-16 -left-16 h-40 w-[calc(100%+8rem)] bg-gradient-to-b from-transparent via-white to-white dark:via-zinc-900 dark:to-zinc-900" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxs("div", { className: "relative flex items-center gap-6 lg:items-end", children: [
                  /* @__PURE__ */ jsxs("div", { id: "docs-card-content", className: "flex items-start gap-6 lg:flex-col", children: [
                    /* @__PURE__ */ jsx("div", { className: "flex size-12 shrink-0 items-center justify-center rounded-full bg-[#FF2D20]/10 sm:size-16", children: /* @__PURE__ */ jsxs(
                      "svg",
                      {
                        className: "size-5 sm:size-6",
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        children: [
                          /* @__PURE__ */ jsx(
                            "path",
                            {
                              fill: "#FF2D20",
                              d: "M23 4a1 1 0 0 0-1.447-.894L12.224 7.77a.5.5 0 0 1-.448 0L2.447 3.106A1 1 0 0 0 1 4v13.382a1.99 1.99 0 0 0 1.105 1.79l9.448 4.728c.14.065.293.1.447.1.154-.005.306-.04.447-.105l9.453-4.724a1.99 1.99 0 0 0 1.1-1.789V4ZM3 6.023a.25.25 0 0 1 .362-.223l7.5 3.75a.251.251 0 0 1 .138.223v11.2a.25.25 0 0 1-.362.224l-7.5-3.75a.25.25 0 0 1-.138-.22V6.023Zm18 11.2a.25.25 0 0 1-.138.224l-7.5 3.75a.249.249 0 0 1-.329-.099.249.249 0 0 1-.033-.12V9.772a.251.251 0 0 1 .138-.224l7.5-3.75a.25.25 0 0 1 .362.224v11.2Z"
                            }
                          ),
                          /* @__PURE__ */ jsx(
                            "path",
                            {
                              fill: "#FF2D20",
                              d: "m3.55 1.893 8 4.048a1.008 1.008 0 0 0 .9 0l8-4.048a1 1 0 0 0-.9-1.785l-7.322 3.706a.506.506 0 0 1-.452 0L4.454.108a1 1 0 0 0-.9 1.785H3.55Z"
                            }
                          )
                        ]
                      }
                    ) }),
                    /* @__PURE__ */ jsxs("div", { className: "pt-3 sm:pt-5 lg:pt-0", children: [
                      /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold text-black dark:text-white", children: "Documentation" }),
                      /* @__PURE__ */ jsx("p", { className: "mt-4 text-sm/relaxed", children: "Laravel has wonderful documentation covering every aspect of the framework. Whether you are a newcomer or have prior experience with Laravel, we recommend reading our documentation from beginning to end." })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsx(
                    "svg",
                    {
                      className: "size-6 shrink-0 stroke-[#FF2D20]",
                      xmlns: "http://www.w3.org/2000/svg",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      strokeWidth: "1.5",
                      children: /* @__PURE__ */ jsx(
                        "path",
                        {
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          d: "M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                        }
                      )
                    }
                  )
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "a",
            {
              href: "https://laracasts.com",
              className: "flex items-start gap-4 rounded-lg bg-white p-6 shadow-[0px_14px_34px_0px_rgba(0,0,0,0.08)] ring-1 ring-white/[0.05] transition duration-300 hover:text-black/70 hover:ring-black/20 focus:outline-none focus-visible:ring-[#FF2D20] lg:pb-10 dark:bg-zinc-900 dark:ring-zinc-800 dark:hover:text-white/70 dark:hover:ring-zinc-700 dark:focus-visible:ring-[#FF2D20]",
              children: [
                /* @__PURE__ */ jsx("div", { className: "flex size-12 shrink-0 items-center justify-center rounded-full bg-[#FF2D20]/10 sm:size-16", children: /* @__PURE__ */ jsx(
                  "svg",
                  {
                    className: "size-5 sm:size-6",
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: /* @__PURE__ */ jsx("g", { fill: "#FF2D20", children: /* @__PURE__ */ jsx("path", { d: "M24 8.25a.5.5 0 0 0-.5-.5H.5a.5.5 0 0 0-.5.5v12a2.5 2.5 0 0 0 2.5 2.5h19a2.5 2.5 0 0 0 2.5-2.5v-12Zm-7.765 5.868a1.221 1.221 0 0 1 0 2.264l-6.626 2.776A1.153 1.153 0 0 1 8 18.123v-5.746a1.151 1.151 0 0 1 1.609-1.035l6.626 2.776ZM19.564 1.677a.25.25 0 0 0-.177-.427H15.6a.106.106 0 0 0-.072.03l-4.54 4.543a.25.25 0 0 0 .177.427h3.783c.027 0 .054-.01.073-.03l4.543-4.543ZM22.071 1.318a.047.047 0 0 0-.045.013l-4.492 4.492a.249.249 0 0 0 .038.385.25.25 0 0 0 .14.042h5.784a.5.5 0 0 0 .5-.5v-2a2.5 2.5 0 0 0-1.925-2.432ZM13.014 1.677a.25.25 0 0 0-.178-.427H9.101a.106.106 0 0 0-.073.03l-4.54 4.543a.25.25 0 0 0 .177.427H8.4a.106.106 0 0 0 .073-.03l4.54-4.543ZM6.513 1.677a.25.25 0 0 0-.177-.427H2.5A2.5 2.5 0 0 0 0 3.75v2a.5.5 0 0 0 .5.5h1.4a.106.106 0 0 0 .073-.03l4.54-4.543Z" }) })
                  }
                ) }),
                /* @__PURE__ */ jsxs("div", { className: "pt-3 sm:pt-5", children: [
                  /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold text-black dark:text-white", children: "Laracasts" }),
                  /* @__PURE__ */ jsx("p", { className: "mt-4 text-sm/relaxed", children: "Laracasts offers thousands of video tutorials on Laravel, PHP, and JavaScript development. Check them out, see for yourself, and massively level up your development skills in the process." })
                ] }),
                /* @__PURE__ */ jsx(
                  "svg",
                  {
                    className: "size-6 shrink-0 self-center stroke-[#FF2D20]",
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    strokeWidth: "1.5",
                    children: /* @__PURE__ */ jsx(
                      "path",
                      {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        d: "M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                      }
                    )
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "a",
            {
              href: "https://laravel-news.com",
              className: "flex items-start gap-4 rounded-lg bg-white p-6 shadow-[0px_14px_34px_0px_rgba(0,0,0,0.08)] ring-1 ring-white/[0.05] transition duration-300 hover:text-black/70 hover:ring-black/20 focus:outline-none focus-visible:ring-[#FF2D20] lg:pb-10 dark:bg-zinc-900 dark:ring-zinc-800 dark:hover:text-white/70 dark:hover:ring-zinc-700 dark:focus-visible:ring-[#FF2D20]",
              children: [
                /* @__PURE__ */ jsx("div", { className: "flex size-12 shrink-0 items-center justify-center rounded-full bg-[#FF2D20]/10 sm:size-16", children: /* @__PURE__ */ jsx(
                  "svg",
                  {
                    className: "size-5 sm:size-6",
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: /* @__PURE__ */ jsxs("g", { fill: "#FF2D20", children: [
                      /* @__PURE__ */ jsx("path", { d: "M8.75 4.5H5.5c-.69 0-1.25.56-1.25 1.25v4.75c0 .69.56 1.25 1.25 1.25h3.25c.69 0 1.25-.56 1.25-1.25V5.75c0-.69-.56-1.25-1.25-1.25Z" }),
                      /* @__PURE__ */ jsx("path", { d: "M24 10a3 3 0 0 0-3-3h-2V2.5a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2V20a3.5 3.5 0 0 0 3.5 3.5h17A3.5 3.5 0 0 0 24 20V10ZM3.5 21.5A1.5 1.5 0 0 1 2 20V3a.5.5 0 0 1 .5-.5h14a.5.5 0 0 1 .5.5v17c0 .295.037.588.11.874a.5.5 0 0 1-.484.625L3.5 21.5ZM22 20a1.5 1.5 0 1 1-3 0V9.5a.5.5 0 0 1 .5-.5H21a1 1 0 0 1 1 1v10Z" }),
                      /* @__PURE__ */ jsx("path", { d: "M12.751 6.047h2a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-.75.75h-2A.75.75 0 0 1 12 7.3v-.5a.75.75 0 0 1 .751-.753ZM12.751 10.047h2a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-.75.75h-2A.75.75 0 0 1 12 11.3v-.5a.75.75 0 0 1 .751-.753ZM4.751 14.047h10a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-.75.75h-10A.75.75 0 0 1 4 15.3v-.5a.75.75 0 0 1 .751-.753ZM4.75 18.047h7.5a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-.75.75h-7.5A.75.75 0 0 1 4 19.3v-.5a.75.75 0 0 1 .75-.753Z" })
                    ] })
                  }
                ) }),
                /* @__PURE__ */ jsxs("div", { className: "pt-3 sm:pt-5", children: [
                  /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold text-black dark:text-white", children: "Laravel News" }),
                  /* @__PURE__ */ jsx("p", { className: "mt-4 text-sm/relaxed", children: "Laravel News is a community driven portal and newsletter aggregating all of the latest and most important news in the Laravel ecosystem, including new package releases and tutorials." })
                ] }),
                /* @__PURE__ */ jsx(
                  "svg",
                  {
                    className: "size-6 shrink-0 self-center stroke-[#FF2D20]",
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    strokeWidth: "1.5",
                    children: /* @__PURE__ */ jsx(
                      "path",
                      {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        d: "M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                      }
                    )
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4 rounded-lg bg-white p-6 shadow-[0px_14px_34px_0px_rgba(0,0,0,0.08)] ring-1 ring-white/[0.05] lg:pb-10 dark:bg-zinc-900 dark:ring-zinc-800", children: [
            /* @__PURE__ */ jsx("div", { className: "flex size-12 shrink-0 items-center justify-center rounded-full bg-[#FF2D20]/10 sm:size-16", children: /* @__PURE__ */ jsx(
              "svg",
              {
                className: "size-5 sm:size-6",
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                children: /* @__PURE__ */ jsx("g", { fill: "#FF2D20", children: /* @__PURE__ */ jsx("path", { d: "M16.597 12.635a.247.247 0 0 0-.08-.237 2.234 2.234 0 0 1-.769-1.68c.001-.195.03-.39.084-.578a.25.25 0 0 0-.09-.267 8.8 8.8 0 0 0-4.826-1.66.25.25 0 0 0-.268.181 2.5 2.5 0 0 1-2.4 1.824.045.045 0 0 0-.045.037 12.255 12.255 0 0 0-.093 3.86.251.251 0 0 0 .208.214c2.22.366 4.367 1.08 6.362 2.118a.252.252 0 0 0 .32-.079 10.09 10.09 0 0 0 1.597-3.733ZM13.616 17.968a.25.25 0 0 0-.063-.407A19.697 19.697 0 0 0 8.91 15.98a.25.25 0 0 0-.287.325c.151.455.334.898.548 1.328.437.827.981 1.594 1.619 2.28a.249.249 0 0 0 .32.044 29.13 29.13 0 0 0 2.506-1.99ZM6.303 14.105a.25.25 0 0 0 .265-.274 13.048 13.048 0 0 1 .205-4.045.062.062 0 0 0-.022-.07 2.5 2.5 0 0 1-.777-.982.25.25 0 0 0-.271-.149 11 11 0 0 0-5.6 2.815.255.255 0 0 0-.075.163c-.008.135-.02.27-.02.406.002.8.084 1.598.246 2.381a.25.25 0 0 0 .303.193 19.924 19.924 0 0 1 5.746-.438ZM9.228 20.914a.25.25 0 0 0 .1-.393 11.53 11.53 0 0 1-1.5-2.22 12.238 12.238 0 0 1-.91-2.465.248.248 0 0 0-.22-.187 18.876 18.876 0 0 0-5.69.33.249.249 0 0 0-.179.336c.838 2.142 2.272 4 4.132 5.353a.254.254 0 0 0 .15.048c1.41-.01 2.807-.282 4.117-.802ZM18.93 12.957l-.005-.008a.25.25 0 0 0-.268-.082 2.21 2.21 0 0 1-.41.081.25.25 0 0 0-.217.2c-.582 2.66-2.127 5.35-5.75 7.843a.248.248 0 0 0-.09.299.25.25 0 0 0 .065.091 28.703 28.703 0 0 0 2.662 2.12.246.246 0 0 0 .209.037c2.579-.701 4.85-2.242 6.456-4.378a.25.25 0 0 0 .048-.189 13.51 13.51 0 0 0-2.7-6.014ZM5.702 7.058a.254.254 0 0 0 .2-.165A2.488 2.488 0 0 1 7.98 5.245a.093.093 0 0 0 .078-.062 19.734 19.734 0 0 1 3.055-4.74.25.25 0 0 0-.21-.41 12.009 12.009 0 0 0-10.4 8.558.25.25 0 0 0 .373.281 12.912 12.912 0 0 1 4.826-1.814ZM10.773 22.052a.25.25 0 0 0-.28-.046c-.758.356-1.55.635-2.365.833a.25.25 0 0 0-.022.48c1.252.43 2.568.65 3.893.65.1 0 .2 0 .3-.008a.25.25 0 0 0 .147-.444c-.526-.424-1.1-.917-1.673-1.465ZM18.744 8.436a.249.249 0 0 0 .15.228 2.246 2.246 0 0 1 1.352 2.054c0 .337-.08.67-.23.972a.25.25 0 0 0 .042.28l.007.009a15.016 15.016 0 0 1 2.52 4.6.25.25 0 0 0 .37.132.25.25 0 0 0 .096-.114c.623-1.464.944-3.039.945-4.63a12.005 12.005 0 0 0-5.78-10.258.25.25 0 0 0-.373.274c.547 2.109.85 4.274.901 6.453ZM9.61 5.38a.25.25 0 0 0 .08.31c.34.24.616.561.8.935a.25.25 0 0 0 .3.127.631.631 0 0 1 .206-.034c2.054.078 4.036.772 5.69 1.991a.251.251 0 0 0 .267.024c.046-.024.093-.047.141-.067a.25.25 0 0 0 .151-.23A29.98 29.98 0 0 0 15.957.764a.25.25 0 0 0-.16-.164 11.924 11.924 0 0 0-2.21-.518.252.252 0 0 0-.215.076A22.456 22.456 0 0 0 9.61 5.38Z" }) })
              }
            ) }),
            /* @__PURE__ */ jsxs("div", { className: "pt-3 sm:pt-5", children: [
              /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold text-black dark:text-white", children: "Vibrant Ecosystem" }),
              /* @__PURE__ */ jsxs("p", { className: "mt-4 text-sm/relaxed", children: [
                "Laravel's robust library of first-party tools and libraries, such as",
                " ",
                /* @__PURE__ */ jsx(
                  "a",
                  {
                    href: "https://forge.laravel.com",
                    className: "rounded-sm underline hover:text-black focus:outline-none focus-visible:ring-1 focus-visible:ring-[#FF2D20] dark:hover:text-white dark:focus-visible:ring-[#FF2D20]",
                    children: "Forge"
                  }
                ),
                ",",
                " ",
                /* @__PURE__ */ jsx(
                  "a",
                  {
                    href: "https://vapor.laravel.com",
                    className: "rounded-sm underline hover:text-black focus:outline-none focus-visible:ring-1 focus-visible:ring-[#FF2D20] dark:hover:text-white",
                    children: "Vapor"
                  }
                ),
                ",",
                " ",
                /* @__PURE__ */ jsx(
                  "a",
                  {
                    href: "https://nova.laravel.com",
                    className: "rounded-sm underline hover:text-black focus:outline-none focus-visible:ring-1 focus-visible:ring-[#FF2D20] dark:hover:text-white",
                    children: "Nova"
                  }
                ),
                ",",
                " ",
                /* @__PURE__ */ jsx(
                  "a",
                  {
                    href: "https://envoyer.io",
                    className: "rounded-sm underline hover:text-black focus:outline-none focus-visible:ring-1 focus-visible:ring-[#FF2D20] dark:hover:text-white",
                    children: "Envoyer"
                  }
                ),
                ", and",
                " ",
                /* @__PURE__ */ jsx(
                  "a",
                  {
                    href: "https://herd.laravel.com",
                    className: "rounded-sm underline hover:text-black focus:outline-none focus-visible:ring-1 focus-visible:ring-[#FF2D20] dark:hover:text-white",
                    children: "Herd"
                  }
                ),
                " ",
                "help you take your projects to the next level. Pair them with powerful open source libraries like",
                " ",
                /* @__PURE__ */ jsx(
                  "a",
                  {
                    href: "https://laravel.com/docs/billing",
                    className: "rounded-sm underline hover:text-black focus:outline-none focus-visible:ring-1 focus-visible:ring-[#FF2D20] dark:hover:text-white",
                    children: "Cashier"
                  }
                ),
                ",",
                " ",
                /* @__PURE__ */ jsx(
                  "a",
                  {
                    href: "https://laravel.com/docs/dusk",
                    className: "rounded-sm underline hover:text-black focus:outline-none focus-visible:ring-1 focus-visible:ring-[#FF2D20] dark:hover:text-white",
                    children: "Dusk"
                  }
                ),
                ",",
                " ",
                /* @__PURE__ */ jsx(
                  "a",
                  {
                    href: "https://laravel.com/docs/broadcasting",
                    className: "rounded-sm underline hover:text-black focus:outline-none focus-visible:ring-1 focus-visible:ring-[#FF2D20] dark:hover:text-white",
                    children: "Echo"
                  }
                ),
                ",",
                " ",
                /* @__PURE__ */ jsx(
                  "a",
                  {
                    href: "https://laravel.com/docs/horizon",
                    className: "rounded-sm underline hover:text-black focus:outline-none focus-visible:ring-1 focus-visible:ring-[#FF2D20] dark:hover:text-white",
                    children: "Horizon"
                  }
                ),
                ",",
                " ",
                /* @__PURE__ */ jsx(
                  "a",
                  {
                    href: "https://laravel.com/docs/sanctum",
                    className: "rounded-sm underline hover:text-black focus:outline-none focus-visible:ring-1 focus-visible:ring-[#FF2D20] dark:hover:text-white",
                    children: "Sanctum"
                  }
                ),
                ",",
                " ",
                /* @__PURE__ */ jsx(
                  "a",
                  {
                    href: "https://laravel.com/docs/telescope",
                    className: "rounded-sm underline hover:text-black focus:outline-none focus-visible:ring-1 focus-visible:ring-[#FF2D20] dark:hover:text-white",
                    children: "Telescope"
                  }
                ),
                ", and more."
              ] })
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxs("footer", { className: "py-16 text-center text-sm text-black dark:text-white/70", children: [
          "Laravel v",
          laravelVersion,
          " (PHP v",
          phpVersion,
          ")"
        ] })
      ] }) })
    ] })
  ] });
}
const __vite_glob_0_29 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Welcome
}, Symbol.toStringTag, { value: "Module" }));
createServer(
  (page) => createInertiaApp({
    page,
    render: ReactDOMServer.renderToString,
    resolve: (name) => {
      const pages = /* @__PURE__ */ Object.assign({ "./Pages/Auth/ConfirmPassword.jsx": __vite_glob_0_0, "./Pages/Auth/ForgotPassword.jsx": __vite_glob_0_1, "./Pages/Auth/Login.jsx": __vite_glob_0_2, "./Pages/Auth/ResetPassword.jsx": __vite_glob_0_3, "./Pages/Auth/VerifyEmail.jsx": __vite_glob_0_4, "./Pages/Dashboard.jsx": __vite_glob_0_5, "./Pages/Events/Create.jsx": __vite_glob_0_6, "./Pages/Events/Edit.jsx": __vite_glob_0_7, "./Pages/Events/Index.jsx": __vite_glob_0_8, "./Pages/Images/Create.jsx": __vite_glob_0_9, "./Pages/Images/Edit.jsx": __vite_glob_0_10, "./Pages/Images/Index.jsx": __vite_glob_0_11, "./Pages/Profile/Edit.jsx": __vite_glob_0_12, "./Pages/Profile/Partials/DeleteUserForm.jsx": __vite_glob_0_13, "./Pages/Profile/Partials/UpdatePasswordForm.jsx": __vite_glob_0_14, "./Pages/Profile/Partials/UpdateProfileInformationForm.jsx": __vite_glob_0_15, "./Pages/Public/About.jsx": __vite_glob_0_16, "./Pages/Public/Agency.jsx": __vite_glob_0_17, "./Pages/Public/Contacts.jsx": __vite_glob_0_18, "./Pages/Public/Emporium.jsx": __vite_glob_0_19, "./Pages/Public/EventShow.jsx": __vite_glob_0_20, "./Pages/Public/Events.jsx": __vite_glob_0_21, "./Pages/Public/Expertise.jsx": __vite_glob_0_22, "./Pages/Public/Gallery.jsx": __vite_glob_0_23, "./Pages/Public/Home.jsx": __vite_glob_0_24, "./Pages/Public/Laboratories.jsx": __vite_glob_0_25, "./Pages/Public/Other.jsx": __vite_glob_0_26, "./Pages/Public/Special.jsx": __vite_glob_0_27, "./Pages/Public/Training.jsx": __vite_glob_0_28, "./Pages/Welcome.jsx": __vite_glob_0_29 });
      return pages[`./Pages/${name}.jsx`];
    },
    setup: ({ App, props }) => /* @__PURE__ */ jsx(App, { ...props })
  })
);
