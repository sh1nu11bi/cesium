/*global define*/
define(['./JulianDate',
        './TimeInterval',
        './TimeStandard'
       ], function(
       JulianDate,
       TimeInterval,
       TimeStandard) {
    "use strict";

    var MINIMUM_VALUE = Object.freeze(JulianDate.fromDate(new Date(Date.UTC(-1, 0, 1, 0, 0, 0))), TimeStandard.TAI);
    var MAXIMUM_VALUE = Object.freeze(JulianDate.fromDate(new Date(Date.UTC(10000, 0, 0, 0, 0, 0))), TimeStandard.TAI);

    /**
     * Constants related to ISO8601 support.
     *
     * @exports Iso8601
     *
     * @see <a href='http://en.wikipedia.org/wiki/ISO_8601'>ISO 8601 on Wikipedia</a>.
     */
    var Iso8601 = {

        /**
         * A JulianDate representing the earliest time representable by an ISO8601 date.
         * This is equivalent to the date string '0000-01-01T00:00:00Z'
         */
        MINIMUM_VALUE : MINIMUM_VALUE,

        /**
         * A JulianDate representing the latest time representable by an ISO8601 date.
         * This is equivalent to the date string '9999-12-31T24:00:00Z'
         */
        MAXIMUM_VALUE : MAXIMUM_VALUE,

        /**
         * A TimeInterval representing the largest interval representable by an ISO8601 interval.
         * This is equivalent to the interval string '0000-01-01T00:00:00Z/9999-12-31T24:00:00Z'
         */
        MAXIMUM_INTERVAL : Object.freeze(new TimeInterval(MINIMUM_VALUE, MAXIMUM_VALUE, true, true))
    };
    return Iso8601;
});