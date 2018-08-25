import { environment as Environment } from '../../environments/environment';

/**
 * The URL endpoint to connect the app to the staging server or to the testing server
 * @type string
 */
declare var Api: any;

export const URL = Environment.production ? "http://localhost:3000" : "http://localhost:3000";

/**
 * An Object that holds all the api endpoints of the backend
 * @type {Object}
 */
export const API = {
    URL: URL,
    classes: `${URL}/classes`,
    students: `${URL}/students`,



    update_profile:`${URL}/update-profile`,
    Authentication: {
        Login: `${URL}/auth`,
        verifyToken: `${URL}/me`
    },
    floors: {
        get: `${URL}/floors`
    },
    statuses: {
        get: `${URL}/statuses`
    },
    roomTypes: {
        get: `${URL}/room-types`
    },
    services: {
        get: `${URL}/services`,
        types: `${URL}/services/list/types`,
        orderedByReservation: `${URL}/services/reservation`,
        order: `${URL}/services/service-order`,
        service_ordered: `${URL}/services/service-ordered/list`
    },
    ikps: {
        get: `${URL}/lkps`
    },
    rooms: `${URL}/rooms`,
    payments: `${URL}/payments`,
    notifications: `${URL}/notifications`,
    notificationTypes: `${URL}/notification-types`,
    bookingReferences: `${URL}/booking-references`,
    safetyAndLost: `${URL}/safety-and-lost`,
    clients: `${URL}/clients`,
    expenseTypes: `${URL}/expense-types`,
    incomeTypes: `${URL}/income-types`,
    contractTerms: `${URL}/contract-terms`,
    countries: `${URL}/hotels/edit`,
    hotels: `${URL}/hotels`,
    roomPriceSettings: `${URL}/room-price-settings`,
    reservations: `${URL}/reservations`,
    reservationsTypes: `${URL}/reservations/types`,
    reservationStatuses: `${URL}/reservations/statuses`,
    reservationCheckOut: `${URL}/reservation-check-out`,
    bonds: `${URL}/bonds`,
    users: `${URL}/users`,
    families: `${URL}/tsaheel-com/families`,
    companies: `${URL}/tsaheel-com/companies`,
    reservationDuration: `${URL}/reservation-duration`,
    roomsAvailable: `${URL}/rooms/available`,
    reservationCancel: `${URL}/reservation-cancel`,
    accouning: `${URL}/accounting`,
    reservationTimeSettings: `${URL}/reservations/time-settings`,
    reservationInsuranceSettings: `${URL}/reservation-insurance-settings`,
    reservationContract: `${URL}/reservation-contract`,
    reservationCalculations: `${URL}/reservation-calculations`,
    partners: `${URL}/partners`,
    roles: `${URL}/roles`,
    permissions: `${URL}/permissions`,
    checkPermissions: `${URL}/check-permissions`,
    messages: `${URL}/messages`,
    orderService: `${URL}/services/invoices-bond-orders`,
    employees: `${URL}/users`,
    todaysReservations: `${URL}/reservations/today/rooms-clients`,
    changePassword: `${URL}/change-password`,
    topcities: `${URL}/reports/top-cities`,
    toprooms: `${URL}/reports/top-rooms`,
    topnationalties: `${URL}/reports/top-nationalities`,
    topmonths: `${URL}/reports/top-months`,
    toporg: `${URL}/reports/top-companies`,
    topdays: `${URL}/reports/top-days`,
    stats: `${URL}/statistics`,
    partnersShareGraph: `${URL}/partners/share-graph`,
    statisticsIncomesExpenses: `${URL}/statistics/incomes-expenses`,
    topCountries: `${URL}/reports/top-countries`,
    timezones: `${URL}/timezones`,
    languages: `${URL}/languages`,
    shortcuts: `${URL}/shortcuts`,
    accounts: `${URL}/accounts`,
    cashiers: `${URL}/cashiers`,
    cashiersOpen: `${URL}/cashiers/open`,
    cashiersClose: `${URL}/cashiers/close`,
    openedCashiers: `${URL}/cashiers/list/opened`,
    availableCashiers: `${URL}/cashiers/available/open`,
    transactions: `${URL}/transactions`,
    printTransactions: `${URL}/transactions/print/all`,
    housekeeping: `${URL}/rooms/house-keeping`,
    roomsHousekeeping: `${URL}/rooms/today-house-keeping`,
    transactionsCategory: `${URL}/transactions/list/categories`,
    transactionsTypes: `${URL}/transactions/list/types`,
    entities: `${URL}/entities`,
    clientExport: `${URL}/clients/export`,
    locators: `${URL}/locators`,
    _housekeeping: `/house-keeping`,
    history:`${URL}/history`,
    cancellationReasons:`${URL}/cancellation-reasons`,
    agents:`${URL}/agents`,
    currencies:`${URL}/currencies`,
    pusher:`${URL}/pusher`

};
