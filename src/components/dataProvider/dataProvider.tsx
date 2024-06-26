import { Appointment } from '@/types/Appointment';
import { Brand } from '@/types/Brand';
import { Car } from '@/types/Car';
import { CarType } from '@/types/CarType';
import { Images } from '@/types/Images';
import { MotorType } from '@/types/MotorType';
import { Role } from '@/types/RoleType';
import { User } from '@/types/UserType';
import axios from 'axios';
import { DataProvider, fetchUtils } from 'react-admin';

const apiUrl = 'http://localhost:8080';

const httpClient = fetchUtils.fetchJson;

export const dataProvider: DataProvider = {

    getList: async (resource, params) => {
        const response = await axios.get(`${apiUrl}/${resource}`);

        if (resource.includes("user")) {
            let userList = [];
            for (let i = 0; i < response.data.length; i++) {
                userList.push({
                    id: response.data[i].userId,
                    name: response.data[i].name,
                    email: response.data[i].email,
                    password: response.data[i].password,
                    isActive: response.data[i].isActive,
                    role: response.data[i].role,
                });
            }
            return {
                data: userList,
                total: response.data.length,
            };
        }

        if (resource.includes("role")) {
            let roleList = [];
            for (let i = 0; i < response.data.length; i++) {
                roleList.push({
                    id: response.data[i].roleId,
                    roleName: response.data[i].roleName,
                });
            }
            return {
                data: roleList,
                total: response.data.length,
            };
        }

        if (resource.includes("brand")) {
            let brandList = [];
            for (let i = 0; i < response.data.length; i++) {
                brandList.push({
                    id: response.data[i].brandId,
                    name: response.data[i].name,
                    logoUrl: response.data[i].logoUrl
                });
            }
            return {
                data: brandList,
                total: response.data.length,
            };
        }

        if (resource.includes("motor")) {
            let motorTypeList = [];
            for (let i = 0; i < response.data.length; i++) {
                motorTypeList.push({
                    id: response.data[i].motorTypeId,
                    name: response.data[i].name,
                });
            }
            return {
                data: motorTypeList,
                total: response.data.length,
            };
        }

        if (resource.includes("carType")) {
            let carTypeList = [];
            for (let i = 0; i < response.data.length; i++) {
                carTypeList.push({
                    id: response.data[i].carTypeId,
                    name: response.data[i].name,
                });
            }
            return {
                data: carTypeList,
                total: response.data.length,
            };
        }

        if (resource.toLowerCase().includes("appointment")) {
            let appointmentList = [];
            for (let i = 0; i < response.data.length; i++) {
                appointmentList.push({
                    id: response.data[i].appointmentId,
                    name: response.data[i].name,
                    firtName: response.data[i].firstName,
                    email: response.data[i].email,
                    message: response.data[i].message,
                    contact: response.data[i].contact,
                    appointmentDate: response.data[i].appointmentDate,
                    status: response.data[i].status,
                    car: response.data[i].car,
                });
            }
            return {
                data: appointmentList,
                total: response.data.length,
            };
        }

        if (resource.includes("image")) {
            let imageList = [];
            for (let i = 0; i < response.data.length; i++) {
                imageList.push({
                    id: response.data[i].imageId,
                    url: response.data[i].url,
                    car: response.data[i].car,
                    brand: response.data[i].brand,
                });
            }
            return {
                data: imageList,
                total: response.data.length,
            };
        }

        if (resource.toLowerCase().includes("car")) {
            let carList = [];
            for (let i = 0; i < response.data.length; i++) {
                carList.push({
                    id: response.data[i].carId,
                    name: response.data[i].name,
                    price: response.data[i].price,
                    color: response.data[i].color,
                    power: response.data[i].power,
                    placeNumber: response.data[i].placeNumber,
                    status: response.data[i].status,
                    images: response.data[i].images,
                    motorType: response.data[i].motorType,
                    carType: response.data[i].carType,
                    brand: response.data[i].brand,
                });
            }
            return {
                data: carList,
                total: response.data.length,
            };
        }
        
        return {
            data: response.data,
            total: response.data.length,
        };
    },

    getOne: async (resource, params) => {
       const response = await axios.get(`${apiUrl}/${resource}/${params.id}`);

       if (resource.includes("user")) {
           return {
               data: {
                   id: response.data.userId,
                   name: response.data.name,
                   email: response.data.email,
                   password: response.data.password,
                   isActive: response.data.isActive,
                   role: response.data.role,
               },
           };
       }

       if (resource.includes("role")) {
            return {
                data: {
                    id: response.data.roleId,
                    roleName: response.data.roleName,
                },
            };
       }

       if (resource.includes("brand")) {
            return {
                data: {
                    id: response.data.brandId,
                    name: response.data.name,
                    logoUrl: response.data.logoUrl,
                },
            };
       }

       if (resource.includes("motorType")) {
            return {
                data: {
                    id: response.data.motorTypeId,
                    name: response.data.name,
                },
            };
       }

       if (resource.includes("carType")) {
            return {
                data: {
                    id: response.data.carTypeId,
                    name: response.data.name,
                },
            };
       }

       if (resource.includes("appointment")) {
            return {
                data: {
                    id: response.data.appointmentId,
                    name: response.data.name,
                    firtName: response.data.firstName,
                    email: response.data.email,
                    message: response.data.message,
                    contact: response.data.contact,
                    appointmentDate: response.data.appointmentDate,
                    status: response.data.status,
                },
            };
       }

       if (resource.includes("image")) {
            return {
                data: {
                    id: response.data.imageId,
                    url: response.data.url,
                    car: response.data.car,
                    brand: response.data.brand,
                },
            };
       }

       if (resource.includes("car")) {
            return {
                data: {
                    id: response.data.carId,
                    name: response.data.name,
                    price: response.data.price,
                    color: response.data.color,
                    power: response.data.power,
                    placeNumber: response.data.placeNumber,
                    status: response.data.status,
                    images: response.data.images,
                    motorType: response.data.motorType,
                    carType: response.data.carType,
                    brand: response.data.brand,
                },
            };
       }

       return {
           data: response.data,
       };
    },

    getMany: async (resource, params) => {
        const response = await axios.get(`${apiUrl}/${resource}`);

        if (resource.includes("user")) {
            let userList = [];
            for (let i = 0; i < response.data.length; i++) {
                userList.push({
                    id: response.data[i].userId,
                    name: response.data[i].name,
                    email: response.data[i].email,
                    password: response.data[i].password,
                    isActive: response.data[i].isActive,
                    role: response.data[i].role,
                });
            }
            return {
                data: userList,
                total: response.data.length,
            };
        }

        if (resource.includes("role")) {
            let roleList = [];
            for (let i = 0; i < response.data.length; i++) {
                roleList.push({
                    id: response.data[i].roleId,
                    roleName: response.data[i].roleName,
                });
            }
            return {
                data: roleList,
                total: response.data.length,
            };
        }

        if (resource.includes("brand")) {
            let brandList = [];
            for (let i = 0; i < response.data.length; i++) {
                brandList.push({
                    id: response.data[i].brandId,
                    name: response.data[i].name,
                    logoUrl: response.data[i].logoUrl
                });
            }
            return {
                data: brandList,
                total: response.data.length,
            };
        }

        if (resource.includes("motor")) {
            let motorTypeList = [];
            for (let i = 0; i < response.data.length; i++) {
                motorTypeList.push({
                    id: response.data[i].motorTypeId,
                    name: response.data[i].name,
                });
            }
            return {
                data: motorTypeList,
                total: response.data.length,
            };
        }

        if (resource.includes("carType")) {
            let carTypeList = [];
            for (let i = 0; i < response.data.length; i++) {
                carTypeList.push({
                    id: response.data[i].carTypeId,
                    name: response.data[i].name,
                });
            }
            return {
                data: carTypeList,
                total: response.data.length,
            };
        }

        if (resource.toLowerCase().includes("appointment")) {
            let appointmentList = [];
            for (let i = 0; i < response.data.length; i++) {
                appointmentList.push({
                    id: response.data[i].appointmentId,
                    name: response.data[i].name,
                    firtName: response.data[i].firstName,
                    email: response.data[i].email,
                    message: response.data[i].message,
                    contact: response.data[i].contact,
                    appointmentDate: response.data[i].appointmentDate,
                    status: response.data[i].status,
                    car: response.data[i].car,
                });
            }
            return {
                data: appointmentList,
                total: response.data.length,
            };
        }

        if (resource.includes("image")) {
            let imageList = [];
            for (let i = 0; i < response.data.length; i++) {
                imageList.push({
                    id: response.data[i].imageId,
                    url: response.data[i].url,
                    car: response.data[i].car,
                    brand: response.data[i].brand,
                });
            }
            return {
                data: imageList,
                total: response.data.length,
            };
        }

        if (resource.toLowerCase().includes("car")) {
            let carList = [];
            for (let i = 0; i < response.data.length; i++) {
                carList.push({
                    id: response.data[i].carId,
                    name: response.data[i].name,
                    price: response.data[i].price,
                    color: response.data[i].color,
                    power: response.data[i].power,
                    placeNumber: response.data[i].placeNumber,
                    status: response.data[i].status,
                    images: response.data[i].images,
                    motorType: response.data[i].motorType,
                    carType: response.data[i].carType,
                    brand: response.data[i].brand,
                });
            }
            return {
                data: carList,
                total: response.data.length,
            };
        }
        
        return {
            data: response.data,
            total: response.data.length,
        };
    },

    getManyReference: async (resource, params) => {
        const { page, perPage } = params.pagination;
        const query = {
            ...params.filter,
            [params.target]: params.id,
            page: page,
            perPage: perPage
        };
        const url = `${apiUrl}/${resource}?${fetchUtils.queryParameters(query)}`;
        const { headers, json } = await httpClient(url);
        return {
            data: json,
            total: parseInt(headers.get('content-range')?.split('/').pop() || '0', 10),
        };
    },

    update: async (resource, params) => {
        // update user
       if (resource.includes("user")) {
            let user: User = {
                userId: 0,
                name: '',
                email: '',
                password: '',
                isActive: false,
                role: {
                    roleId: 0,
                    roleName: ''
                }
            };
            user.userId = params.id;
            user.name = params.data.name;
            user.email = params.data.email;
            user.password = params.data.password;
            user.isActive = params.data.isActive;
            user.role = params.data.role;
            const response = await axios.put(`${apiUrl}/${resource}/${params.id}`, user);
            user = response.data;
            return {
                data: params.data,
            };
       }
       // update role
       if(resource.includes("role")) {
            let role : Role = {
                roleId : 0,
                roleName : ''
            }
            role.roleId = params.id;
            role.roleName = params.data.roleName;
            const response = await axios.put(`${apiUrl}/${resource}/${params.id}`, role);
            role = response.data;
            return {
                data : params.data
            };
       }
       // update brand
       if(resource.includes("brand")) {
           let brand : Brand = {
               brandId : 0,
               name : '',
               logoUrl : ''
           }
           brand.brandId = params.id;
           brand.name = params.data.name;
           brand.logoUrl = params.data.logoUrl
           const response = await axios.put(`${apiUrl}/${resource}/${params.id}`, brand);
           brand = response.data;
           return {
              data : params.data
           }
       }
       // update motor
       if(resource.includes("Motor")) {
         let motor : MotorType = {
            motorTypeId : 0,
            name : ''
         }
         motor.motorTypeId = params.id;
         motor.name = params.data.name;
         const response = await axios.put(`${apiUrl}/${resource}/${params.id}`, motor);
         motor = response.data;
         return {
            data : params.data
         }
       }

       // update CarType
       if(resource.includes("CarType")) {
        let carType : CarType = {
           carTypeId : 0,
           name : ''
        }
        carType.carTypeId = params.id;
        carType.name = params.data.name;
        const response = await axios.put(`${apiUrl}/${resource}/${params.id}`, carType);
        carType = response.data;
        return {
           data : params.data
        }
      }

      //update Appointment
      if(resource.includes("Appointment")) {
        let appointment: Appointment = {
            appointmentId: params.id,
            name: params.data.name,
            firstName: params.data.firstName,
            email: params.data.email,
            message: params.data.message,
            contact: params.data.contact,
            appointmentDate: params.data.appointmentDate,
            status: params.data.status,
            car: params.data.car,
        };
        const response = await axios.put(`${apiUrl}/${resource}/${params.id}`, appointment);
        appointment = response.data;
        return {
            data: params.data
        };
      }

      // update Image
      if (resource.includes("Image")) {
        let image: Images = {
            imageId: params.id,
            url: params.data.url,
            car: params.data.car,
            brand: params.data.brand,
        };
        const response = await axios.put(`${apiUrl}/${resource}/${params.id}`, image);
        image = response.data;
        return {
            data: params.data
        };
      }
      
      // update Car
      if (resource.includes("Car")) {
        let car: Car = {
            carId: params.id,
            name: params.data.name,
            model: params.data.model,
            price: params.data.price,
            color: params.data.color,
            power: params.data.power,
            placeNumber: params.data.placeNumber,
            status: params.data.status,
            images: params.data.images,
            brand: params.data.brand,
            carType: params.data.carType,
            motorType: params.data.motorType,
        };
        const response = await axios.put(`${apiUrl}/${resource}/${params.id}`, car);
        car = response.data;
        return {
            data: params.data
        };
      }
      
     
    },

    updateMany: async (resource, params) => {
        const responses = await Promise.all(
            params.ids.map(id =>
                httpClient(`${apiUrl}/${resource}/${id}`, {
                    method: 'PUT',
                    body: JSON.stringify(params.data),
                })
            )
        );
        return {
            data: responses.map(({ json }) => json.id),
        };
    },

    create: async (resource, params) => {
        const { json } = await httpClient(`${apiUrl}/${resource}`, {
            method: 'POST',
            body: JSON.stringify(params.data),
        });
        return {
            data: { ...params.data, id: json.id },
        };
    },

    delete: async (resource, params) => {
        await httpClient(`${apiUrl}/${resource}/${params.id}`, {
            method: 'DELETE',
        });
        return {
            data: { id: params.id },
        };
    },

    deleteMany: async (resource, params) => {
        const responses = await Promise.all(
            params.ids.map(id =>
                httpClient(`${apiUrl}/${resource}/${id}`, {
                    method: 'DELETE',
                })
            )
        );
        return {
            data: responses.map(({ json }) => json.id),
        };
    },
};

export default dataProvider;