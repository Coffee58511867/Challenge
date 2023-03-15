import React from "react";
import IItem from "../models/item.type";
import { useForm } from "react-hook-form";

export default function AddItem() {
  return (
    <div>
      <div>
        <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-50">
          <div>
            <a href="/">
              <h3 className="text-4xl font-bold text-purple-600">
                Add Items to List
              </h3>
            </a>
          </div>
          <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-md sm:rounded-lg">
            <form>
              <div>
                <label
                  htmlFor="title"
                  className="block text-sm font-medium text-gray-700 undefined"
                >
                  Title
                </label>
                <div className="flex flex-col items-start">
                  <input
                    type="text"
                    name="title"
                    placeholder="Enter title"
                    className="block w-full h-6 mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                </div>
              </div>
              <div className="mt-6">
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-gray-700 undefined"
                >
                  Description
                </label>
                <div className="flex flex-col items-start">
                  <input
                    type="text"
                    name="description"
                   
                    placeholder="Enter Description"
                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                </div>
              </div>
              <div className="flex items-center justify-end mt-4">
                <button
                  type="submit"
                  className=" block w-full  items-center px-4 py-2 ml-4 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-900 border border-transparent rounded-md active:bg-gray-900 false"
                >
                  Register
                </button>
              </div>
            </form>
          </div>
          <div className="space-y-2 shadow-md">
            <h3 className="text-2xl font-semibold">
              React Tailwind Card Title
            </h3>
            <p className="text-gray-600 text-lg">
              react with tailwind css simple card It is a long established fact
              that a reader will be distracted.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
