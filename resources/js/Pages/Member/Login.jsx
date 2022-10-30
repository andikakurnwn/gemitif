import React, { useEffect } from "react";
import Button from "@/Components/Button";
import Checkbox from "@/Components/Checkbox";
import Guest from "@/Layouts/Guest";
import Input from "@/Components/Input";
import Label from "@/Components/Label";
import ValidationErrors from "@/Components/ValidationErrors";
import { Head, Link, useForm } from "@inertiajs/inertia-react";

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: "",
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const onHandleChange = (event) => {
        setData(
            event.target.name,
            event.target.type === "checkbox"
                ? event.target.checked
                : event.target.value
        );
    };

    const submit = (e) => {
        e.preventDefault();
        post(route("login"));
    };

    return (
        <>
            <Head title="GEADMIN2 - Admin Area" />

            <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">
                <div className="w-full sm:max-w-md mt-6 px-6 py-8 bg-white shadow-md overflow-hidden sm:rounded-lg border-t-8 border-gray-800">
                    <div className="flex mb-4">
                        <h4 className="text-3xl font-semibold">GEADMIN2</h4>
                    </div>
                    <hr className="h-.4 bg-gray-200 mb-6" />
                    <form onSubmit={submit}>
                        <div className="flex flex-col">
                            <label htmlFor="email" className="text-xs">
                                Email
                            </label>

                            <Input
                                id="email"
                                name="email"
                                value={data.email}
                                autoComplete="off"
                                placeholder="Email"
                                handleChange={onHandleChange}
                            />
                        </div>
                        <div className="flex flex-col mt-4">
                            <label htmlFor="password" className="text-xs">
                                Password
                            </label>

                            <Input
                                type="password"
                                id="password"
                                name="password"
                                value={data.password}
                                autoComplete="off"
                                placeholder="Password"
                                handleChange={onHandleChange}
                            />
                        </div>
                        <div className="flex mt-4 items-center">
                            <label className="flex items-center text-xs text-gray-500 mt-1">
                                <Checkbox
                                    name="remember"
                                    value={data.remember}
                                    handleChange={onHandleChange}
                                />

                                <span className="ml-2 text-sm text-gray-600">
                                    Selalu Masuk ?
                                </span>
                            </label>
                        </div>
                        <div className="mt-4">
                            <button
                                type="submit"
                                className="flex text-xs bg-gray-700 text-white w-full py-3 items-center justify-center"
                            >
                                Masuk
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
