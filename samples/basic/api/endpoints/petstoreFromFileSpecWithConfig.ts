/**
 * Generated by orval v6.7.1 🍺
 * Do not edit manually.
 * Swagger Petstore
 * OpenAPI spec version: 1.0.0
 */
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
export type CreatePetsBody = {
  name: string;
  tag: string;
};

export type ListPetsParams = { limit?: string };

export interface Error {
  code: number;
  message: string;
}

export interface Pet {
  id: number;
  name: string;
  tag?: string;
}

export type Pets = Pet[];

export type AwaitedInput<T> = PromiseLike<T> | T;

export type Awaited<O> = O extends AwaitedInput<infer T> ? T : never;

/**
 * @summary List all pets
 */
export const listPets = <TData = AxiosResponse<Pets>>(
  params?: ListPetsParams,
  options?: AxiosRequestConfig,
): Promise<TData> => {
  return axios.get(`/pets`, {
    params,
    ...options,
  });
};

/**
 * @summary Create a pet
 */
export const createPets = <TData = AxiosResponse<void>>(
  createPetsBody: CreatePetsBody,
  options?: AxiosRequestConfig,
): Promise<TData> => {
  return axios.post(`/pets`, createPetsBody, options);
};

/**
 * @summary Info for a specific pet
 */
export const showPetById = <TData = AxiosResponse<Pet>>(
  petId: string,
  options?: AxiosRequestConfig,
): Promise<TData> => {
  return axios.get(`/pets/${petId}`, options);
};

export type ListPetsResult = AxiosResponse<Pets>;
export type CreatePetsResult = AxiosResponse<void>;
export type ShowPetByIdResult = AxiosResponse<Pet>;
