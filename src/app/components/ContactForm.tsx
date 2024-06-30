"use client"
import { MouseEvent, useState } from "react"
import { CustomButton } from "./custom/CustomHTMLTags"
import emailjs from '@emailjs/browser'
import { dataSchema } from "../validator/filledDataSchema"
import { z } from 'zod'
import { displayErrorToast, displayToast } from "./custom/CustomToast"

type UserData = {
    firstName: string,
    lastName: string,
    mailFrom: string,
    mailSubject: string,
    mailBody: string
}

const ContactForm = () => {

    const [filledData, setFilledData] = useState<UserData>({
        firstName: "",
        lastName: "",
        mailFrom: "",
        mailSubject: "general-query",
        mailBody: ""
    })

    const [loading, setLoading] = useState<boolean>(false)

    const sendMail = async (e: MouseEvent) => {

        e.preventDefault()
        setLoading(true)

        try {
            dataSchema.parse(filledData)
        } catch (err) {
            if (err instanceof z.ZodError) {
                if (err.errors[0].path[0]) {
                    displayErrorToast(err.errors[0].message)
                }
            } else {
                displayErrorToast('Something went wrong')
            }
            setLoading(false)
            return
        }

        const promise = new Promise((resolve, reject) => {
            const mailObject = {
                to_name: process.env.NEXT_PUBLIC_MAIL_TO,
                from_name: filledData.firstName + ' ' + filledData.lastName,
                from_mail: filledData.mailFrom,
                subject: filledData.mailSubject,
                message: filledData.mailBody
            }

            emailjs.send(
                process.env.NEXT_PUBLIC_SERVICE_ID ?? "",
                process.env.NEXT_PUBLIC_TEMPLATE_ID ?? "",
                mailObject,
                process.env.NEXT_PUBLIC_USER_ID
            ).then((res) => {
                console.log(res)
                resolve('Mail sent')
            }, (err) => {
                console.log(err)
                reject('Mail not sent')
            })
        });
        displayToast(promise);
        setFilledData({
            firstName: "",
            lastName: "",
            mailFrom: "",
            mailSubject: "general-query",
            mailBody: ""
        })
        setLoading(false)
    }

    return (
        <div className="max-w-full max-lg:max-w-3xl mx-auto">
            <div className="mt-3 grid lg:grid-cols-2 items-start gap-1 p-2 shadow-md rounded-lg border-2">
                <div className="p-4 lg:col-span-2">
                    <div className="grid sm:grid-cols-2 gap-8">
                        <div className="flex-col gap-y-3">
                            <div className="ml-1 font-bold text-sm md:text-md">
                                First Name<span className="text-red-600 ml-1 select-none">*</span>
                            </div>
                            <div className="rounded-md relative flex items-center shadow-md">
                                <input
                                    type="text"
                                    placeholder="Enter your first name"
                                    className="pt-2 pb-1 px-3 w-full border-2 rounded-md text-xs md:text-sm"
                                    value={filledData.firstName}
                                    onChange={(e) => {
                                        setFilledData({ ...filledData, firstName: e.target.value })
                                    }}
                                    disabled={loading}
                                />
                            </div>
                        </div>

                        <div className="flex-col gap-y-3">
                            <div className="ml-1 font-bold text-sm md:text-md">
                                Last Name<span className="text-red-600 ml-1 select-none">*</span>
                            </div>
                            <div className="rounded-md relative flex items-center shadow-md">
                                <input
                                    type="text"
                                    placeholder="Enter your last name"
                                    className="pt-2 pb-1 px-3 w-full border-2 rounded-md text-xs md:text-sm"
                                    value={filledData.lastName}
                                    onChange={(e) => {
                                        setFilledData({ ...filledData, lastName: e.target.value })
                                    }}
                                    disabled={loading}
                                />
                            </div>
                        </div>

                        <div className="relative flex-col items-center sm:col-span-2">
                            <div className="ml-1 font-bold text-sm md:text-md">
                                Your Email<span className="text-red-600 ml-1 select-none">*</span>
                            </div>
                            <div className="rounded-md relative flex items-center shadow-md">
                                <input
                                    type="email"
                                    placeholder="Enter your email address"
                                    className="pt-2 pb-1 px-3 w-full border-2 rounded-md text-xs md:text-sm"
                                    value={filledData.mailFrom}
                                    onChange={(e) => {
                                        setFilledData({ ...filledData, mailFrom: e.target.value })
                                    }}
                                    disabled={loading}
                                />
                            </div>
                        </div>

                        <div className="col-span-full">
                            <div className="ml-1 font-bold text-sm md:text-md">
                                Select Subject<span className="text-red-600 ml-1 select-none">*</span>
                            </div>
                            <div className="grid md:grid-cols-2 gap-1 md:gap-3 rounded-xl p-1 w-fit text-xs md:text-sm">
                                <div>
                                    <input
                                        type="radio"
                                        name="option"
                                        id="general-query"
                                        value="general-query"
                                        className="peer hidden"
                                        checked={filledData.mailSubject === 'general-query'}
                                        onChange={() => setFilledData({ ...filledData, mailSubject: 'general-query' })}
                                        disabled={loading}
                                    />
                                    <label htmlFor="general-query" className="border-2 block select-none rounded-lg p-2 text-center peer-checked:bg-black peer-checked:text-white shadow-md">General Query</label>
                                </div>
                                <div>
                                    <input
                                        type="radio"
                                        name="option"
                                        id="portfolio-feedback"
                                        value="portfolio-feedback"
                                        className="peer hidden"
                                        checked={filledData.mailSubject === 'portfolio-feedback'}
                                        onChange={() => setFilledData({ ...filledData, mailSubject: 'portfolio-feedback' })}
                                        disabled={loading}
                                    />
                                    <label
                                        htmlFor="portfolio-feedback"
                                        className="border-2 block select-none rounded-lg p-2 text-center peer-checked:bg-black peer-checked:text-white shadow-md"
                                    >Portfolio Feedback</label>
                                </div>
                            </div>
                        </div>
                        <div className="relative flex-col items-center sm:col-span-2">
                            <div className="ml-1 font-bold text-sm md:text-md">
                                Email Body<span className="text-red-600 ml-1 select-none">*</span>
                            </div>
                            <textarea
                                placeholder="Write Email body"
                                className="pt-2 pb-1 px-3 w-full border-2 rounded-md text-xs md:text-sm h-[250px] min-h-[100px] shadow-md"
                                value={filledData.mailBody}
                                onChange={(e) => {
                                    setFilledData({ ...filledData, mailBody: e.target.value })
                                }}
                                disabled={loading}
                            ></textarea>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <CustomButton className="w-full md:w-[50%] mt-6" disabled={loading} onClick={(e: MouseEvent) => sendMail(e)}>Send Mail</CustomButton>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactForm